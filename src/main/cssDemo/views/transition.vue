<template>
    <div class="wrap">
        <div class="demo-1">
            <el-form  class="form"  label-width="120px">
                <el-form-item label="transformOrigin">
                    <el-input v-model="transformOrigin" type="text"></el-input>
                </el-form-item>
                <el-form-item label="rotateX">
                    <span class="form-info">{{rotateX}}deg</span>
                    <input class="input-range" v-model="rotateX" min="-360" max="360" type="range"/>
                </el-form-item>
                <el-form-item label="rotateY">
                    <span class="form-info">{{rotateY}}deg</span>
                    <input class="input-range" v-model="rotateY" min="-360" max="360"  type="range"/>
                </el-form-item>
                <el-form-item label="rotateZ">
                    <span class="form-info">{{rotateZ}}deg</span>
                    <input class="input-range" v-model="rotateZ" min="-360" max="360"  type="range"/>
                </el-form-item>
                <el-form-item label="translateX">
                    <span class="form-info">{{translateX}}px</span>
                    <input class="input-range" v-model="translateX" min="-360" max="360" type="range"/>
                </el-form-item>
                <el-form-item label="translateY">
                    <span class="form-info">{{translateY}}px</span>
                    <input class="input-range" v-model="translateY" min="-360" max="360" type="range"/>
                </el-form-item>
                <el-form-item label="translateZ">
                    <span class="form-info">{{translateZ}}px</span>
                    <input class="input-range" v-model="translateZ" min="-360" max="360" type="range"/>
                </el-form-item>
            </el-form>
            <div class="threeD-demo" :style="{'transform-origin': `${transformOrigin}`}">
                <div ref="threeD1" :style="{transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`}">
                    <img src="../../../assets/images/cqyJiYlRwnTeHmj.jpg" width="200" height="200" alt="">
                </div>
            </div>
        </div>
        <div class="demo-2">
            <div class="cube-wrap" :style="{'transform-origin': `${transformOrigin}`}">
                <div class="cube" :style="{transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`}">
                    <div class="front">front</div>
                    <div class="back">back</div>
                    <div class="left">left</div>
                    <div class="right">right</div>
                    <div class="top">top</div>
                    <div class="bottom">bottom</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            perspective: 800,
            perspectiveOriginX: '50%',
            perspectiveOriginY: '50%',
            transformOrigin: 'center',
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            translateX: 0,
            translateY: 0,
            translateZ: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap{background: #fff;padding: 10px;}
.demo-1{
    display: flex;
    align-items: center;
}
.form {
    width: 50%;
    /deep/ .el-form-item__content {
        display: flex;
        align-items: center;
    }
    .form-info{
        font-weight: bold;
        display: inline-block;
        width: 60px;
    }
    .input-range{
        flex: 1;
    }
}
.threeD-demo{
    flex: 1;
    perspective: 800;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;

    > div{
        width: 200px;
        height: 200px;
        margin: 0 auto;
        transition: all .3s;
    }
}
.demo-2{
    .cube-wrap{
        width: 200px;
        height: 200px;
        perspective:800;
        margin: 100px auto;
        
        .cube{
            transform-style: preserve-3d;
            transform-origin: center center;
            position: relative;
            transition: all 1s;
            // animation: cube 30s linear infinite ;
            
            > div{
                position: absolute;
                width: 200px;
                height: 200px;
                color: #fff;
                font-size: 40px;
                line-height: 200px;
                text-align: center;
                &.front{
                    background: rgba(18, 98, 124,.9);
                    transform: translateZ(100px);
                }
                &.back{
                    background: rgba(97, 48, 57,0.8);
                    transform: rotateY(180deg) translateZ(100px);
                }
                &.left{
                    background: rgba(201, 201, 48,.8);
                    transform: rotateY(-90deg) translateZ(100px);
                }
                &.right{
                    background: rgba(216, 144, 144,.8);
                    transform: rotateY(90deg) translateZ(100px);
                }
                &.top{
                    background: rgba(51, 129, 129, .8);
                    transform: rotateX(90deg) translateZ(100px);
                }
                &.bottom{
                    background: rgba(36, 128, 36,.8);
                    transform: rotateX(-90deg) translateZ(100px);
                }
            }
            // &:hover{
            //     transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
            // }
        }
    }
    @keyframes cube {
        0%{
            transform: rotateX(-360deg) rotateY(-360deg) rotateZ(-360deg);
        }
        50% {
            transform: rotateX(0) rotateY(0) rotateZ(0);
        }
        100%{
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
    }
}
</style>