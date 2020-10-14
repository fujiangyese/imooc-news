<template>
    <view class="scroll">
        <scroll-view scroll-y="true" class="list-scroll">
            <view><slot>
            <!-- 定义插槽在外部传递数据填充 -->
            </slot></view>
        </scroll-view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.scroll {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    .list-scroll {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>
