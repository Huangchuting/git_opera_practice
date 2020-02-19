<template>
    <div>
        <div class="gradient-text gradient-text-one">
            静夜思
        </div>
        <div class="gradient-text gradient-text-two" data-content="床前明月光，">
            床前明月光，
        </div>
        <div class="gradient-text gradient-text-two" data-content="疑是地上霜，">
            疑是地上霜，
        </div>
        <div class="gradient-text gradient-text-two" data-content="举头望明月，">
            举头望明月，
        </div>
        <svg viewBoxs="0 0 500 300" class="svgBox">
            <defs>
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="10" x2="0" y2="50">
                    <stop offset="0" style="stop-color:yellow"/>
                    <stop offset="0.5" style="stop-color:#fd8403"/>
                    <stop offset="1" style="stop-color:red"/>
                </linearGradient>
            </defs>
            <text text-anchor="middle" class="gradient-text gradient-text-three" x="40%" y="30%">低头思故乡。</text>
        </svg>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.gradient-text{
    text-align: left;
    line-height: 50px;
    font-size: 40px;
    position: relative;
    &.gradient-text-one{
        background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &.gradient-text-two{
        color: red;
         &[data-content]:after{
            content: attr(data-content);
            display: block;
            position: absolute;
            color: yellow;
            left: 0;
            top: 0;
            right: 0;
            text-align: left;
            -webkit-mask-image: -webkit-linear-gradient(top, yellow, rgba(0,0,255,0));
        }
    }
    &.gradient-text-three{
        fill:url(#SVGID_1_);
    }
}
</style>