<template>
    <div class="full horizontal">
        <sider></sider>
        <div class="flex hidden">
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

</style>