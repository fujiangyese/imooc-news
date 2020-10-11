<template>
    <view class="content">
        <!-- 自定义导航栏组件 -->
        <navbar></navbar>
        <tab :list="tabList"></tab>
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
            uniCloud.callFunction({
                name: 'get_label'
            }).then((res)=>{
                const {result} = res
                this.tabList = result.data
            });
        }
    }
};
</script>

<style lang="scss"></style>
