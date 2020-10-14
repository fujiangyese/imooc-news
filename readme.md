## 首先创建一个db_init.json文件用于初始化数据库，生成需要的表

## 配置tabBar，实现底部状态栏切换效果
1. 需要准备6张图片，分别表示三个图标以及被选中的图标。
2. tabBar对象中设置文字颜色，选中颜色，背景颜色，在list数组中配置页面路径，默认图标，选中图标，文本内容

## 自定义导航栏
1. ![导航栏](readme_files/1.jpg)
2. 去掉原生导航栏，实现自定义导航栏，定义一个navbar组件
3. 使用position:fixed固定导航栏位置在页面顶部
4. 导航栏会覆盖顶部的数据，在外层添加一个view标签，对这个标签进行固定，则内部元素不会被遮盖
5. 添加状态栏的高度
6. 在iconfont.cn中生成在线的css，通过文本的形式引入图标 ../../向上移动两层

## 插件市场搜索icons
1. 为项目安装插件
2. 会在components下创建uni-icons文件夹，它就是一个图标组件
3. 通过uicon快捷键生成uni-icons标签，type设置图标样子，color设置颜色，size设置大小，可以通过@click绑定方法

## 选项卡
1. 下方文章根据选项卡切换，选项卡超出页面宽度可以左右滚动
2. 右侧增加一个设置图标，需要在父级设置display:flex tab-scroll类设置overflow:hidden
3. 增加一个竖线，在tab-icons类上使用伪类::after，则竖线会出现在内部的图标元素之前

## 选项卡数据初始化
1. 实现第一个云函数

## 选项卡切换
1. 实现选项卡切换高亮效果
2. 定义一个active类，当选中某一个选项就给该选项添加上这个类名
3. 在item上面绑定clickTab方法，接收item和index
4. :class="{active:activeIndex===index}"，当activeIndex属性等于index时才添加active类名
5. 在clickTab函数中设置this.activeIndex = index
6. 通过this.$emit('tab',{data:item,index:index})定义tab事件，将子组件数据传递给父组件

## 基础卡片视图实现

