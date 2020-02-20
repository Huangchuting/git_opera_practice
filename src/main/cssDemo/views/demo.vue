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
                    <span v-for="(item, index) in  landInTexts.split('')" :key="index" :style="{animationDelay: `${index * .03}s`}">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>2.2用JS分割文本2</h5>
            <div class="demo-2-2">
                <div class="reveal">
                    <span v-for="(item, index) in  revealTexts.split('')" :style="{animationDelay: `${.3 + Math.abs(index - revealTexts.split('').length / 2) * .1}s`}" :key="index">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>3.伪类</h5>
            <div class="demo-3">
                <button
                    data-text="Start"
                    class="btn btn-primary btn-ghost btn-border-stroke  btn-text-float-up"
                    >
                    <div class="btn-borders">
                        <div class="border-top"></div>
                        <div class="border-right"></div>
                        <div class="border-bottom"></div>
                        <div class="border-left"></div>
                    </div>
                    <span class="btn-text">Start</span>
                </button>
            </div>
        </div>
        <div class="demo">
            <h5>4.绝对定位实现多重边框</h5>
            <div class="demo-4">
                <button class="btn btn-primary btn-ghost btn-multiple-border-stroke">
                    <div class="btn-borders-group">
                        <div class="border-top"></div>
                        <div class="border-right"></div>
                        <div class="border-bottom"></div>
                        <div class="border-left"></div>
                    </div>
                    <div class="btn-borders-group">
                        <div class="border-top"></div>
                        <div class="border-right"></div>
                        <div class="border-bottom"></div>
                        <div class="border-left"></div>
                    </div>
                    <div class="btn-borders-group">
                        <div class="border-top"></div>
                        <div class="border-right"></div>
                        <div class="border-bottom"></div>
                        <div class="border-left"></div>
                    </div>
                    <span class="btn-text">Start</span>
                </button>
            </div>
        </div>
        <div class="demo">
            <h5>5.伪元素</h5>
            <div class="demo-5">
                <header>
                    <h1 class="title slide-bar">I'm alphardex.</h1>
                    <p class="subtitle slide-bar">A CSS Wizard</p>
                </header>
            </div>
        </div>
        <div class="demo">
            <h5>6.attr()生成文本内容</h5>
            <div class="demo-6">
                <ul class="float-text-menu">
                    <li v-for="(letters, index1) in textMenu" :key='index1'>
                        <span v-for="(letter, index2) in letters.split('')" :key='index2' :style="{transitionDelay: `${index2 / 20}s`}" :data-text='letter'>{{letter}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="demo">
            <h5>overflow障眼法</h5>
            <div class="demo-7">
                <button class="btn btn-primary btn-ghost btn-shine">
                    hover me
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            landInTexts: 'Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.',
            revealTexts: 'sword art online',
            textMenu: ['Home', 'Archives', 'Tags', 'Categories', 'About']
        }
    },
    mounted () {
    },
    methods: {
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
.demo-3{
    .btn {
        $hue: 190;
        $ease-in-duration: 0.25s;
        $ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
        $ease-out-duration: 0.65s;
        $ease-out-delay: $ease-in-duration;
        $ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
        position: relative;
        padding: 1rem 3rem;
        font-size: 1rem;
        line-height: 1.5;
        color: white;
        text-decoration: none;
        background-color: hsl($hue, 100%, 41%);
        border: 1px solid hsl($hue, 100%, 41%);
        outline: transparent;
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        transition: 0.25s;

        &:hover {
            background: hsl($hue, 100%, 31%);
        }

        &-primary {
            $hue: 171;
        }

        &-ghost {
            color: hsl($hue, 100%, 41%);
            background-color: transparent;
            border-color: hsl($hue, 100%, 41%);

            &:hover {
                color: white;
            }
        }

        &-border-stroke {
            border-color: hsla($hue, 100%, 41%, 0.35);

            .btn-borders {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                .border-top {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleX(0);
                    transform-origin: left;
                }

                .border-right {
                    position: absolute;
                    right: 0;
                    width: 1px;
                    height: 100%;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleY(0);
                    transform-origin: bottom;
                }

                .border-bottom {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleX(0);
                    transform-origin: left;
                }

                .border-left {
                    position: absolute;
                    left: 0;
                    width: 1px;
                    height: 100%;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleY(0);
                    transform-origin: bottom;
                }

                // when unhover, ease-out left, bottom; ease-in right, top

                .border-left {
                    transition: $ease-out-duration $ease-out-delay $ease-out-exponential;
                }
                .border-bottom {
                    transition: $ease-out-duration $ease-out-delay $ease-out-exponential;
                }

                .border-right {
                    transition:  $ease-in-exponential;
                }
                .border-top {
                    transition:  $ease-in-exponential;
                }
            }

            &:hover {
                color: hsl($hue, 100%, 41%);
                background: transparent;

                .border-top,
                .border-bottom {
                    transform: scaleX(1);
                }
                .border-left,
                .border-right {
                    transform: scaleY(1);
                }

                // when hover, ease-in left, bottom; ease-out right, top

                .border-left {
                    transition:  $ease-in-exponential;
                }
                .border-bottom {
                    transition:  $ease-in-exponential;
                }

                .border-right {
                    transition: $ease-out-duration $ease-out-delay $ease-out-exponential;
                }
                .border-top {
                    transition: $ease-out-duration $ease-out-delay $ease-out-exponential;
                }
            }
        }

        &-text-float-up {
            &::after {
                position: absolute;
                content: attr(data-text);
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transform: translateY(35%);
                transition: 0.25s ease-out;
            }

            // when hover, ease-in top-text; ease-out bottom-text

            .btn-text {
                display: block;
                transition: 0.75s 0.1s $ease-out-exponential;
            }

            &:hover {
                // when hover, ease-in bottom-text; ease-out top-text

                .btn-text {
                    opacity: 0;
                    transform: translateY(-25%);
                    transition: 0.25s ease-out;
                }

                &::after {
                    opacity: 1;
                    transform: translateY(0);
                    transition: 0.75s 0.1s $ease-out-exponential;
                }
            }
        }
    }
}
.demo-4{
    .btn {
        $hue: 190;
        $ease-in-duration: 0.25s;
        $ease-out-duration: 0.65s;
        $ease-out-delay: $ease-in-duration;
        position: relative;
        padding: 1rem 3rem;
        font-size: 1rem;
        line-height: 1.5;
        color: white;
        text-decoration: none;
        background-color: hsl($hue, 100%, 41%);
        border: 1px solid hsl($hue, 100%, 41%);
        outline: transparent;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        transition: 0.25s;

        &:hover {
            background: hsl($hue, 100%, 31%);
        }

        &-primary {
            $hue: 171;
        }

        &-ghost {
            color: hsl($hue, 100%, 41%);
            background-color: transparent;
            border-color: hsl($hue, 100%, 41%);

            &:hover {
            color: white;
            }
        }

        &-multiple-border-stroke {
            border-color: transparent;

            .btn-borders-group {
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border: 1px solid hsla($hue, 100%, 41%, 0.35);

                &:nth-child(1) {
                    left: -8px;
                    padding: 0 8px;
                }

                &:nth-child(2) {
                    top: -8px;
                    padding: 8px 0;
                }

                &:nth-child(3) {
                    top: -4px;
                    left: -4px;
                    padding: 4px;
                }

                .border-top {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleX(0);
                    transform-origin: left;
                }

                .border-right {
                    position: absolute;
                    right: 0;
                    width: 1px;
                    height: 100%;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleY(0);
                    transform-origin: bottom;
                }

                .border-bottom {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleX(0);
                    transform-origin: left;
                }

                .border-left {
                    position: absolute;
                    left: 0;
                    width: 1px;
                    height: 100%;
                    background: hsl($hue, 100%, 41%);
                    transform: scaleY(0);
                    transform-origin: bottom;
                }

                // when unhover, ease-in top, right; ease-out bottom, left

                .border-left {
                    transition: $ease-out-duration $ease-out-delay cubic-bezier(0.2, 1, 0.2, 1);
                }

                .border-bottom {
                    transition: $ease-out-duration $ease-out-delay cubic-bezier(0.2, 1, 0.2, 1);
                }

                .border-right {
                    transition: $ease-in-duration cubic-bezier(1, 0, 0.8, 0);
                }

                .border-top {
                    transition: $ease-in-duration cubic-bezier(1, 0, 0.8, 0);
                }
            }

            &:hover {
                color: hsl($hue, 100%, 41%);
                background: transparent;

                .border-top,
                .border-bottom {
                    transform: scaleX(1);
                }

                .border-left,
                .border-right {
                    transform: scaleY(1);
                }

                // when hover, ease-in bottom, left; ease-out top, right

                .border-left {
                    transition: $ease-in-duration cubic-bezier(1, 0, 0.8, 0);
                }

                .border-bottom {
                    transition: $ease-in-duration cubic-bezier(1, 0, 0.8, 0);
                }

                .border-right {
                    transition: $ease-out-duration $ease-out-delay cubic-bezier(0.2, 1, 0.2, 1);
                }

                .border-top {
                    transition: $ease-out-duration $ease-out-delay cubic-bezier(0.2, 1, 0.2, 1);
                }
            }
        }
    }
}
.demo-5{
    .slide-bar {
        position: relative;
        color: transparent;
        animation: fill-text-white 2s 1.6s forwards;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #35b9f1;
            transform: scaleX(0);
            transform-origin: left;
            animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
        }
    }

    @keyframes slide-in-out {
        50% {
            transform: scaleX(1);
            transform-origin: left;
        }

        50.1% {
            transform-origin: right;
        }

        100% {
            transform: scaleX(0);
            transform-origin: right;
        }
    }

    @keyframes fill-text-white {
        to {
            color: white;
        }
    }

    header {
        .title,
        .subtitle {
            width: 250px;
            height: 30px;
        }

        .title {
            margin: 0;
            font-size: 32px;
            line-height: 30px;

            &::before {
                background: #FF4081;
            }
        }

        .subtitle {
            margin: 10px 0 0 0;
            font-size: 12px;
            line-height: 30px;
            letter-spacing: 5px;
            text-transform: uppercase;
            animation-delay: 3.2s;

            &::before {
                background: #03A9F4;
                animation-delay: 2s;
            }
        }
    }

}
.demo-6{
    .float-text-menu {
        display: flex;
        flex-direction: column;
        list-style-type: none;

        li {
            cursor: pointer;
            color: white;
            text-decoration: none;
            overflow: hidden;
            text-align: center;

            span {
                position: relative;
                transition: transform 0.3s ease-in-out;
                display: inline-block;
                &:before {
                    position: absolute;
                    content: attr(data-text);
                    color: #7ef9ff;
                    transform: translateY(130%);
                }
            }

            &:hover {
                span {
                    transform: translateY(-130%);
                }
            }
        }
    }
}
.demo-7{
    .btn {
        $hue: 190;
        position: relative;
        padding: 1rem 3rem;
        font-size: 1rem;
        line-height: 1.5;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        background-color: hsl($hue, 100%, 41%);
        border: 1px solid hsl($hue, 100%, 41%);
        outline: transparent;
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        transition: 0.25s;

        &:hover {
            background: hsl($hue, 100%, 31%);
        }

        &-primary {
            $hue: 187;
        }

        &-ghost {
            color: hsl($hue, 100%, 41%);
            background-color: transparent;
            border-color: hsl($hue, 100%, 41%);

            &:hover {
                color: white;
            }
        }

        &-shine {
            color: white;

            &::before {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    120deg,
                    transparent,
                    hsla($hue, 100%, 41%, 0.5),
                    transparent
                );
                transform: translateX(-100%);
                transition: 0.6s;
            }

            &:hover {
                background: transparent;
                box-shadow: 0 0 20px 10px hsla($hue, 100%, 41%, 0.5);
            }

            &:hover::before {
                transform: translateX(100%);
            }
        }
    }

}
</style>