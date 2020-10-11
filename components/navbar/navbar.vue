<template>
    <view class="navbar">
        <view class="navbar-fixed">
            <view></view>
            <view class="navbar-content">
                <view class="navbar-search">
                    <view class="navbar-search_icon">
                        <!-- 放图标 -->
                        <!-- <text class="iconfont icon-search"></text> -->
                        <uni-icons type="search" size="16" color="#999"></uni-icons>
                    </view>
                    <view class="navbar-search_text">
                        <!-- 放内容 -->
                        uni-app、vue
                    </view>
                </view>
            </view>
        </view>
        <view style="height: 45px;">
            <!-- 主要是因为使用了z-index设置了层的位置，里层的位置就空出来了，内容会上浮 -->
            <!-- 占位的作用，将导航栏的位置给挤下去 -->
            <!-- 这里只固定上方的导航栏,然后让下面的view还是在内容显示那个层,就可以往下挤 -->
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // statusBarHeight: 20,
            // navBarHeight:45
        };
    },
    methods: {},
    created() {
        // 组件加载时会执行逻辑
        // 获取手机系统信息
        // const info = uni.getSystemInfoSync();
        // this.statusBarHeight = info.statusBarHeight;
        // // 获取胶囊的位置
        // const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
        // this.navBarHeight = menuButtonInfo.button-info.statusBarHeight+menuButtonInfo.top-info.statusBarHeight
    }
};
</script>

<style lang="scss">
    @import '../../common/css/icons.css';
.navbar {
    .navbar-fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;

        width: 100%;
        // height: 45px; //一般导航栏高度都为44px或45px
        background-color: $mk-base-color; //给一个背景颜色  项目主色调
        .navbar-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            padding: 0 15px;
            box-sizing: border-box;
            .navbar-search {
                display: flex;
                align-items: center;
                // padding: 0 10px;
                width: 100%;
                height: 30px;
                background-color: #ffffff;
                border-radius: 15px; //高度的一般就可以实现圆角的样式
                .navbar-search_icon {
                    margin: 0 10px 0 10px;
                    // width: 10px;
                    // height: 10px;
                    // border: 1px solid red;
                }
                .navbar-search_text {
                    font-size: 12px;
                    color: #999999;
                }
            }
        }
    }
}
</style>
