<template>
    <ul class="side-wrap">
        <router-link tag="li" to='/jsDemo/starRating'>星级评分</router-link>
        <router-link tag="li" to='/jsDemo/practise'>练习</router-link>
        <!-- <router-link tag="li" to='/jsDemo/anotherTable'>另一个表格组件</router-link> -->
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


