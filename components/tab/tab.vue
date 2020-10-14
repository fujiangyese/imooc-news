<template>
    <view class="tab">
        <scroll-view scroll-x class="tab-scroll">
            <view class="tab-scroll__box">
                <view class="tab-scroll__item" v-for="(item, index) in list" :key="index" :class="{active:index===activeIndex}" @click="click(item,index)">{{ item.name }}</view>
            </view>
        </scroll-view>
        <view class="tab-icons"><uni-icons type="gear" size="26" color="#666"></uni-icons></view>
    </view>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            activeIndex:0,
        };
    },
    methods: {
      click(item,index){
          this.activeIndex = index
          this.$emit('tab',{item:item,index:index})
      }
    }
};
</script>

<style lang="scss">
.tab {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    background-color: #ffffff;
    box-sizing: border-box;
    .tab-scroll {
        // flex: 1;
        overflow: hidden;
        box-sizing: border-box;
        .tab-scroll__box {
            display: flex;
            flex-wrap: nowrap;
            height: 45px;
            box-sizing: border-box;
            align-items: center;
            .tab-scroll__item {
                flex-shrink: 0;
                padding: 0 10px;
                // margin: 0 10px;
                // width: 25%;
                // border: 1px solid black;
                text-align: center;
                line-height: 45px;
                &.active {
                    color: $mk-base-color;
                }
            }
        }
    }

    .tab-icons {
        position: relative;
        display: flex;
        text-align: center;
        align-items: center;
        width: 45px;
        &::after {
            content: '';
            position: absolute;
            height: 22px;
            left: -5px;
            width: 1px;
            background-color: #ddd;
            
        }
    }
}
</style>
