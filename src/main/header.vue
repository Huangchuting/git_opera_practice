<template>
    <header>
        <ul class="header-tab">
            <router-link tag="li" to="/home">首页</router-link>
            <router-link tag="li" to="/about">组件</router-link>
            <router-link tag="li" to="/form">表单</router-link>
            <router-link tag="li" to="/excel">excel</router-link>
            <router-link tag="li" to="/cssdemo">CSS</router-link>
            <router-link tag="li" to="/canvas">canvas</router-link>
            <router-link tag="li" to="/svgDemo">svg</router-link>
            <router-link tag="li" to="/jsDemo">js</router-link>
            <router-link tag="li" to="/echarts">echarts</router-link>
        </ul>
    </header>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.header-tab{
    font-size: 0;
    padding: 0 10px;
    background: #3b50ce;
    li{
        font-size: 16px;
        display: inline-block;
        padding: 10px 30px;
        color: #fff;
        cursor: pointer;
    }
    .router-link-active{
        color: yellow;
    }
}
</style>


