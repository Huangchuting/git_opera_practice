<template>
    <ul class="side-wrap">
        <router-link tag="li" to='/cssdemo/textGradient'>文字渐变</router-link>
        <!-- <router-link tag="li" to='/about/myTable'>表格组件</router-link> -->
        <!-- <router-link tag="li" to='/about/anotherTable'>另一个表格组件</router-link> -->
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
