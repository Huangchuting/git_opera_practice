<template>
    <div class="canvas-wrp"></div>
</template>
<script>
// import RotateSun from './js/rotateSun'
// import Clock from './js/clock'
// import LoopPanorama from './js/loopPanorama'
// import Ball from './js/ball'
// import Demo from './js/demo'
import SwingBall from './js/swingBall'
export default {
    data () {
        return {

        }
    },
    mounted () {
        // RotateSun()
        // Clock()
        // LoopPanorama()
        // Demo()
        SwingBall()
    }
}
</script>
<style lang="scss" scoped>
    .canvas-wrp{
        width: 100%;
        height: 100%;
    }
</style>