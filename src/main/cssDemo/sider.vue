<template>
    <ul class="side-wrap">
        <router-link tag="li" to='/cssdemo/textGradient'>文字渐变</router-link>
        <router-link tag="li" to='/cssdemo/demo'>demo</router-link>
        <router-link tag="li" to='/cssdemo/randomParticle'>随机粒子动画</router-link>
        <router-link tag="li" to='/cssdemo/shadow'>遮罩</router-link>
        <router-link tag="li" to='/cssdemo/dialog'>弹窗</router-link>
        <router-link tag="li" to='/cssdemo/selfDemo'>self-demo</router-link>
        <router-link tag="li" to='/cssdemo/gradient'>渐变</router-link>
        <router-link tag="li" to='/cssdemo/clipPath'>clip-path</router-link>
        <router-link tag="li" to='/cssdemo/transition'>transition</router-link>
        <router-link tag="li" to='/cssdemo/grid'>Grid</router-link>
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
