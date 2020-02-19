<template>
    <div>
        <div class="demo">
            <h5>1.交错动画</h5>
            <div class="demo-1">
                <span class="round"></span>
                <span class="round"></span>
                <span class="round"></span>
                <span class="round"></span>
                <span class="round"></span>
            </div>
        </div>
        <div class="demo">
            <h5>2.1用JS分割文本1</h5>
            <div class="demo-2-1">
                <div class="landIn">
                    <span v-for="(item, index) in  splitTexts" :key="index">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>2.2用JS分割文本2</h5>
            <div class="demo-2-2">
                <div class="reveal">
                    <span v-for="(item, index) in  splitRevealTexts" v-bind:style="{animationDelay: `${.3 + Math.abs(index - revealTextsMid) * .1}s`}" :key="index">{{item}}</span>
                </div>
            </div>
        </div>
        <!-- <div class="demo">
            <h5>3.随机粒子动画</h5>
            <div class="demo-3">
                <div class="snow-wrap">
                    <span v-for="(item, index) in  200"  :key="index" class="snow"></span>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    data () {
        return {
            landInTexts: 'Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.',
            splitTexts: [],

            revealTexts: 'sword art online',
            splitRevealTexts: [],
            revealTextsMid: 0
        }
    },
    mounted () {
        
        this.initLandIn()
        this.initReveal()
    },
    methods: {
        // 2.1用JS分割文本1
        initLandIn() {
            let letters = this.landInTexts.split('')
            letters.forEach((letter, i) => {
                let timer = setTimeout(() => {
                    this.splitTexts.push(letter)
                    clearTimeout(timer)
                }, i * 100)
            })
        },
        // 2.2用JS分割文本2
        initReveal() {
            let letters = this.revealTexts.split('')
            this.splitRevealTexts = letters
            this.revealTextsMid = letters.length / 2
        }
    }
}
</script>
<style lang="scss" scoped>
h5{color: #fff;font-size: 20px;margin: 30px 0 10px;}
.demo-1{
    font-size: 0;
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    animation-delay: 1s;
    .round{
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 10px;
        
        &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: inherit;
            border-radius: inherit;
            animation: wave 2s ease-out infinite;
        }

        @for $i from 1 through 5{
            &:nth-child(#{$i}){
                background: nth($colors, $i);
                &:before {
                    animation-delay: $i * 0.2s;
                }
            }
            
        }
    }
    @keyframes wave {
        50%,
        75% {
            transform: scale(2.5);
        }

        80%,
        100% {
            opacity: 0;
        }
    }
}
.demo-2-1{
    .landIn{
        display: flex;
        flex-wrap: wrap;
        line-height: 1.8;
        color: white;
        white-space: pre;
        span{
            opacity: 0;
            animation: landIn 0.8s ease-out both;
        }
    }
    
    @keyframes landIn {
        from {
            opacity: 0;
            transform: translateY(-20%);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
.demo-2-2{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .reveal{
        position: relative;
        display: flex;
        color: #6ee1f5;
        font-size: 2em;
        letter-spacing: 3px;
        text-transform: uppercase;
        white-space: pre;
        &:before, &:after{
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2px;
            height: 100%;
            background: #fff;
            opacity: 0;
            transform: scale(0);
        }
        &:before{
            left: 50%;
            animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
        }
        &:after {
            right: 50%;
            animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
        }
        span {
            opacity: 0;
            transform: scale(0);
            animation: fadeIn 2.4s forwards;
        }
    }
    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes slideLeft {
        to {
            left: -6%;
            opacity: 1;
            transform: scale(0.9);
        }
    }

    @keyframes slideRight {
        to {
            right: -6%;
            opacity: 1;
            transform: scale(0.9);
        }
    }
}

</style>