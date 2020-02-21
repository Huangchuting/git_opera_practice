<template>
    <div class="full horizontal">
        <sider></sider>
        <div class="flex hidden wrap30 wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Sider from './sider'
export default {
    components: {
        Sider
    },
    mounted () {
        console.log(this.$toast)
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    // background: url('../../assets/images/bg.jpg') center top no-repeat;
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);
}
</style>
