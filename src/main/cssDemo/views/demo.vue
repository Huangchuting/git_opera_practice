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
            <h5>7.overflow障眼法</h5>
            <div class="demo-7">
                <button class="btn btn-primary btn-ghost btn-shine">
                    hover me
                </button>
            </div>
        </div>
        <div class="demo">
            <h5>8.兄弟选择符定制表单元素</h5>
            <div class="demo-8">
                <form>
                    <fieldset class="todo-list">
                        <legend class="todo-list__title">My Special Todo List</legend>
                        <label class="todo-list__label">
                            <input type="checkbox" name="" id="" />
                            <i class="check"></i>
                            <span>Make awesome CSS animation</span>
                        </label>
                        <label class="todo-list__label">
                            <input type="checkbox" name="" id="" />
                            <i class="check"></i>
                            <span>Watch awesome bangumi</span>
                        </label>
                        <label class="todo-list__label">
                            <input type="checkbox" name="" id="" />
                            <i class="check"></i>
                            <span>Encounter awesome people</span>
                        </label>
                        <label class="todo-list__label">
                            <input type="checkbox" name="" id="" />
                            <i class="check"></i>
                            <span>Be an awesome man</span>
                        </label>
                    </fieldset>
                </form>
            </div>
        </div>
        <div class="demo">
            <h5>9.border-radius</h5>
            <div class="demo-9">
                <nav class="navtab">
                    <ul>
                        <li class="navtab-item" v-for="(item, index) in navList" :key="index" :class="[item.active ? 'active' : '']" @click="changeNav(item, index)">
                            <span class="iconfont" :class="[item.icon]"></span>
                            <span class="text">{{item.text}}</span>
                        </li>
                    </ul>
                    <div class="navtab-active" :style="{transform: `translateX(${130 * activeNav}px)`}"></div>
                </nav>
            </div>
        </div>
        <div class="demo">
            <h5>10.box-shadow</h5>
            <div class="demo-10">
                <ul class="pagination">
                    <li class="page-prev" @click="changePage(0, 'prev')">
                        <span class="prev iconfont icon-plant-"></span>
                    </li>
                    <li class="page-number" v-for="(page, i) in pagination" :key="i"  @click="changePage(page, 0)" :class="[currentPage === page ? 'active' : '']"><span>{{page}}</span></li>
                    <li class="page-next" @click="changePage(0, 'next')">
                        <span class="next iconfont icon-plant-1"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="demo">
            <h5>11.内发光</h5>
            <div class="demo-11">
                <div class="loading"></div>
            </div>
        </div>
        <div class="demo">
            <h5>12.发光文本</h5>
            <div class="demo-12">
                <h1 class="glowIn">
                    <span v-for="(item, index) in  lightTextTit.split('')" :key="index" :style="{animationDelay: `${index * .03}s`}">{{item}}</span>
                </h1>
                <p class="glowIn">
                    <span v-for="(item, index) in  lightTextDesc.split('')" :key="index" :style="{animationDelay: `${index * .03}s`}">{{item}}</span>
                </p>
            </div>
        </div>
        <div class="demo">
            <h5>13.霓虹文本</h5>
            <div class="demo-13">
                <div class="neon">fushigi no monogatari</div>
            </div>
        </div>
        <div class="demo">
            <h5>14.伪3D文本</h5>
            <div class="demo-14">
                <div class="loading">
                    <span v-for="(item, index) in  loading.split('')" :key="index" :style="{animationDelay: `${index / 10}s`}">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>15.background-clip:text</h5>
            <div class="demo-15">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">archives</a></li>
                    <li><a href="#">tags</a></li>
                    <li><a href="#">categories</a></li>
                    <li><a href="#">about</a></li>
                </ul>
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
            textMenu: ['Home', 'Archives', 'Tags', 'Categories', 'About'],
            navList: [
                {
                    icon: 'icon-plant-',
                    text: 'Home',
                    active: true
                },
                {
                    icon: 'icon-plant-1',
                    text: 'Explore',
                    active: false
                },
                {
                    icon: 'icon-plant-2',
                    text: 'Collection',
                    active: false
                },
                {
                    icon: 'icon-plant-3',
                    text: 'Help',
                    active: false
                }
            ],
            activeNav: 0,
            currentPage: 1,
            pagination: [1, 2, 3, 4, 5],
            lightTextTit: 'Hello World',
            lightTextDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. A lacus vestibulum sed arcu.',
            loading: 'Loading'
        }
    },
    mounted () {
    },
    methods: {
        changeNav(item, index) {
            this.navList.forEach((nav, i) => {
                nav.active = false
            })
            this.activeNav = index
            item.active = true
        },
        changePage(page, direction) {
            if (page) {
                this.currentPage = page
            } else if (direction === 'prev') {
                if (this.currentPage === this.pagination[0]) return
                this.currentPage -= 1
            } else {
                if (this.currentPage === this.pagination[this.pagination.length - 1]) return
                this.currentPage += 1
            }
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
        font-size: 2em;
        font-family: Lora, serif;
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
    font-family: Raleway, sans-serif;
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
        font-family: Lato, serif;
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
        font-family: Lato, serif;
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
            font-family: Lora, serif;

            &::before {
                background: #FF4081;
            }
        }

        .subtitle {
            margin: 10px 0 0 0;
            font-size: 12px;
            font-family: Lato, sans-serif;
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
            font-family: Lato, sans-serif;

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
        font-family: Lato, sans-serif;

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
.demo-8{
    .todo-list {
        display: flex;
        flex-direction: column;
        padding: 0 75px 10px 30px;
        background: #162740;
        border: transparent;

        .todo-list__title {
            padding: 3px 6px;
            color: #f1faee;
            background-color: #264456;
        }

        .todo-list__label {
            display: flex;
            align-items: center;
            margin: 40px 0;
            font-size: 24px;
            font-family: Lato, sans-serif;
            color: #f1faee;
            cursor: pointer;

                input[type="checkbox"] {
                opacity: 0;
                appearance: none;

                & + .check {
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    border: 2px solid #f1faee;
                    transition: 0.2s;
                }

                &:checked + .check {
                    width: 25px;
                    height: 15px;
                    border-top: transparent;
                    border-right: transparent;
                    transform: rotate(-45deg);
                }

                & ~ span {
                    position: relative;
                    left: 40px;
                    white-space: nowrap;
                    transition: 0.5s;

                    &::before {
                    position: absolute;
                    content: "";
                    top: 50%;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: #f1faee;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.5s;
                    }
                }

                &:checked ~ span {
                    color: #585b57;

                    &::before {
                    transform: scaleX(1);
                    transform-origin: left;
                    }
                }
            }
        }
        }
}
.demo-9{
    @mixin center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navtab {
        $navtab-width: 600px;
        $navtab-item-width: $navtab-width / 4 - 20px;
        $navtab-overlay-width: $navtab-item-width + 80px;
        $active-index: 0;
        font-family: Lato, sans-serif;

        position: relative;
        width: $navtab-width;
        height: 150px;
        background: white;
        border: 1em solid white;
        // https://9elements.github.io/fancy-border-radius/full-control.html#15.5.15.15-50.95.50.85-150.600
        border-radius: 5% 5% 15% 15% / 15% 15% 50% 50%;
        overflow: hidden;

        ul {
            @include center;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            list-style-type: none;

            .navtab-item {
                @include center;
                z-index: 2;
                flex-direction: column;
                width: $navtab-item-width;
                height: 100%;
                color: #0288d1;
                cursor: pointer;
                transition: 0.5s ease;

                .iconfont {
                    font-size: 36px;
                    transition: 0.5s ease;
                }

                .text {
                    font-size: 20px;
                    user-select: none;
                    opacity: 0;
                    transition: 0.5s ease;
                }

                &.active {
                    width: $navtab-overlay-width;

                    .iconfont {
                        transform: translateY(-10px);
                    }

                    .text {
                        opacity: 1;
                    }
                }
            }
        }

        .navtab-active {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: $navtab-overlay-width;
            background: #b3e5fc;
            border-radius: 20px;
            // transform: translateX($navtab-item-width * $active-index);
            transition: 0.5s ease;
        }
    }
}
.demo-10{
    .pagination {
        display: inline-flex;
        padding: 10px 20px;
        background: white;
        border-radius: 50px;
        box-shadow:    0 0.3px 0.6px rgba(0, 0, 0, 0.056),
            0 0.7px 1.3px rgba(0, 0, 0, 0.081),
            0 1.3px 2.5px rgba(0, 0, 0, 0.1),
            0 2.2px 4.5px rgba(0, 0, 0, 0.119),
            0 4.2px 8.4px rgba(0, 0, 0, 0.144),
            0 10px 20px rgba(0, 0, 0, 0.2);
        list-style-type: none;

        li {
            margin: 0 5px;
            cursor: pointer;

            &.page-number {
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;

                &:hover span {
                    color: white;
                    background: #777;
                }

                &.active span {
                    color: white;
                    background: #333;
                }
            }

            &.page-prev .iconfont,
            &.page-next .iconfont{
                font-size: 20px;
            }

            &.page-prev {
                margin-right: 20px;
            }

            &.page-next {
                margin-left: 20px;
            }

            span {
                display: block;
                line-height: 50px;
                font-size: 20px;
                font-weight: 600;
                text-decoration: none;
                color: #777;
                border-radius: 50%;
                transition: 0.3s;
                &.prev:hover,
                &.next:hover {
                    color: #000;
                }
            }
        }
    }
}
.demo-11{
    .loading {
        position: relative;
        width: 8em;
        height: 8em;
        background: black;
        border-radius: 50%;
        box-shadow: inset 0.5em -0.5em crimson;
        animation: spin 2s linear infinite;

        &:before,
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: inherit;
            border-radius: inherit;
            box-shadow: inherit;
        }

        &:before {
            filter: blur(5px);
        }

        &:after {
            filter: blur(10px);
        }
    }

    @keyframes spin {
    to {
        transform: rotate(1turn);
    }
    }

}
.demo-12{
    font-family: Lora, serif;
    h1{
        text-align: center;
    }
    .glowIn {
        color: white;
        line-height: 1.8;
        span {
            animation: glow-in 0.8s both;
        }
    }

    @keyframes glow-in {
        from {
            opacity: 0;
        }
        65% {
            opacity: 1;
            text-shadow: 0 0 25px white;
        }
        75% {
            opacity: 1;
        }
        to {
            opacity: 0.7;
        }
    }
}
.demo-13{
    .neon {
        color: #cce7f8;
        font-size: 2.5rem;
        font-family: 'Pacifico', cursive;
        text-transform: uppercase;
        animation: shining 0.1s alternate infinite;
    }

    @keyframes shining {
        from {
            text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
            0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
            0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
            0 0 54px rgba(15, 115, 223, 0.9);
        }
        to {
            text-shadow: 0 0 6px rgba(182, 211, 207, 1),
            0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
            0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
            0 0 60px rgba(15, 115, 223, 1);
        }
    }
}
.demo-14{
    @function float-text-3d($shadow-color: #bbb, $depth: 10, $floating: false) {
        $shadows: ();

        // When dropped, it will shrink like a spring. When floating, it grows into its shape.
        @for $i from 1 to $depth {
            @if ($floating == false and $i > $depth / 2) {
            $shadow-color: transparent;
            }
            $shadows: append($shadows, 0 ($i * 1px) $shadow-color, comma);
        }

        // When dropped, the shadow reveals. When floating, the shadow fades.
        @if ($floating == false) {
            $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma);
        } @else {
            $shadows: append($shadows, 0 50px 25px rgba(0, 0, 0, 0.2), comma);
        }

        @return $shadows;
    }
    .loading {
        display: flex;
        color: white;
        font-size: 5em;
        font-family: "Baloo Bhaijaan", cursive;
        text-transform: uppercase;

        span {
            text-shadow: float-text-3d($floating: false);
            transform: translateY(20px);
            animation: bounce 0.5s ease infinite alternate;
        }
    }

    @keyframes bounce {
        to {
            text-shadow: float-text-3d($floating: true);
            transform: translateY(-20px);
        }
    }
}
.demo-15{
    ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        list-style-type: none;

        li {
            padding: 6px 0;

            a {
                $fill-color: #198CE6;
                position: relative;
                display: block;
                padding: 4px 0;
                font-family: Raleway, sans-serif;
                font-size: 3em;
                font-weight: 700;
                text-decoration: none;
                text-transform: uppercase;
                -webkit-text-stroke: 2px $fill-color;
                background: linear-gradient(90deg, $fill-color 0%, $fill-color 100%);
                background-size: 0;
                background-position: left;
                background-repeat: no-repeat;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                transition: 0.5s linear;

                &:hover {
                    background-size: 100%;
                }
            }
        }
    }
}
</style>