<template>
    <div>
        <div class="demo">
            <h5>background-position 实现渐变过渡</h5>
            <div class="demo-1"></div>
        </div>
        <div class="demo">
            <h5>background-color 实现渐变过渡</h5>
            <div class="demo-2"></div>
        </div>
        <div class="demo">
            <h5>借助伪元素和opacity实现渐变过渡</h5>
            <div class="demo-3"></div>
        </div>
        <div class="demo">
            <h5>借助CSS houdini</h5>
            <div class="demo-4"></div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    mounted () {
        if (window.CSS) {
            CSS.registerProperty({
                name: '--start-stop',
                syntax: '<color>',
                inherits: false,
                initialValue: 'transparent'
            });
            CSS.registerProperty({
                name: '--end-stop',
                syntax: '<color>',
                inherits: false,
                initialValue: 'transparent'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
h5{color: #fff;font-size: 20px;margin: 30px 0 10px;}
.demo-1{
    height: 200px;
    background: linear-gradient(to right, olive, green, purple);
    background-size: 200%;
    transition: background-position .5s;   
    &:hover{
        background-position: 100% 0; 
    } 
}
.demo-2{
    height: 200px;
    background:yellow linear-gradient(to right, rgba(0,255,0,0.2), rgba(0,255,0,.5));
    background-size: 200%;
    transition: background-color .5s;   
    &:hover{
        background-color: red; 
    } 
}
.demo-3{
    height: 200px;
    background: linear-gradient(to right, olive, green);
    position: relative;
    z-index: 0;   
    &:before {
        content: '';
        position: absolute;
        left: 0; top: 0; right: 0; bottom: 0;
        background: linear-gradient(to right, green, purple);
        opacity: 0;    
        transition: opacity .5s;
        z-index: -1;
    }
    &:hover:before{
        opacity: 1; 
    } 
}
.demo-4 {
    height: 200px;
    --start-stop: olive;
    --end-stop: green;
    background: linear-gradient(to right, var(--start-stop), var(--end-stop));
    transition: --start-stop .5s, --end-stop .5s;
  	&:hover {
        --start-stop: green;
        --end-stop: purple;
    }
}
</style>