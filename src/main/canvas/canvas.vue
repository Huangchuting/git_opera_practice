<template>
    <div class="canvas-wrp"></div>
</template>
<script>
import Init from './js/init'
export default {
    data () {
        return {

        }
    },
    mounted () {
        Init()
    }
}
</script>
<style lang="scss" scoped>
    .canvas-wrp{
        width: 100%;
        height: 100%;
    }
</style>