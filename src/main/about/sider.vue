<template>
    <ul class="side-wrap">
        <router-link tag="li" to='/about/slider'>滑动组件</router-link>
        <router-link tag="li" to='/about/myTable'>表格组件</router-link>
        <router-link tag="li" to='/about/anotherTable'>另一个表格组件</router-link>
        <router-link tag="li" to='/about/compDemo'>自定义组件</router-link>
    </ul>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.router-link-active{
        color: #3b50ce;
    }
</style>


