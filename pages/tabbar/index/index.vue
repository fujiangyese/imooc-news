<template>
    <view class="home">
        <!-- 自定义导航栏组件 -->
        <navbar></navbar>
        <tab :list="tabList" @tab="tab"></tab>
        <list-scroll>
            <list-card v-for="item in 5"></list-card>
            <!-- 填充数据 -->
        </list-scroll>
    </view>
</template>

<script>
// easyCom components/组件名/组件名.vue可以直接使用组件，而不需要引入注册 局部引入
// import navbar from "@/components/navbar/navbar.vue"
export default {
    // components:{navbar},
    data() {
        return {
            title: 'Hello',
            tabList: []
        };
    },
    onLoad() {
        this.getLabel();
    },
    methods: {
        getLabel() {
            uniCloud
                .callFunction({
                    name: 'get_label'
                })
                .then(res => {
                    const { result } = res;
                    this.tabList = result.data;
                });
        },
        tab(data) {
            let { item, index } = data;
            console.log(item, index);
        }
    }
};
</script>

<style lang="scss">
page {
    height: 100%;
    display: flex;
    .home {
        display: flex;
        flex-direction: column;
        flex: 1;
        border: 1px solid red;
    }
}
</style>
