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
        <div class="demo">
            <h5>16.radial-gradient</h5>
            <div class="demo-16">
                <button class="btn btn-pink btn-bubbles">Click Me</button>
            </div>
        </div>
        <div class="demo">
            <h5>17.conic-gradient</h5>
            <div class="demo-17">
                <ul>
                    <li class="circle-gauge"><a href="#" style="--gauge-value:900;"></a><span>design</span></li>
                    <li class="circle-gauge"><a href="#" style="--gauge-value:744"></a><span>creativity</span></li>
                    <li class="circle-gauge"><a href="#" style="--gauge-value:666"></a><span>accessbility</span></li>
                    <li class="circle-gauge"><a href="#" style="--gauge-value:800"></a><span>content</span></li>
                </ul>
            </div>
        </div>
        <div class="demo">
            <h5>18.backdrop-filter</h5>
            <div class="demo-18">
                <div class="frosted-glass">
                    <h1 class="title">sakura</h1>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>19.mix-blend-mode</h5>
            <div class="demo-19">
                <video autoplay muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
                    <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
                    <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
                </video>
                <h1>ocean</h1>
            </div>
        </div>
        <div class="demo">
            <h5>20.clip-path</h5>
            <div class="demo-20">
                <div class="shadow">
                    <div class="card">
                        <div class="card-header">Contact</div>
                        <div class="card-body">
                        <dl>
                            <span>
                                    <dt><a href="https://github.com/alphardex" target="_blank"><svg t="1580195147272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="737" width="27" height="27"><path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" p-id="738" fill="#4289ff"></path></svg></a></dt>
                                    <dd>alphardex</dd>
                                </span>
                            <span>
                                    <dt><a href="mailto:2582347430@qq.com"><svg t="1580195271469" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9773" width="27" height="27"><path d="M1024.073143 405.723429l0 453.705143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-841.142857 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-453.705143q25.161143 28.013714 57.709714 49.737143 206.848 140.580571 284.013714 197.12 32.548571 23.990857 52.882286 37.449143t53.979429 27.428571 62.829714 13.970286l1.170286 0q29.110857 0 62.829714-13.970286t53.979429-27.428571 52.882286-37.449143q97.133714-70.290286 284.598857-197.12 32.548571-22.308571 57.124571-49.737143zM1024.073143 237.714286q0 45.129143-28.013714 86.308571t-69.705143 70.290286q-214.820571 149.138286-267.410286 185.709714-5.705143 4.022857-24.283429 17.408t-30.866286 21.723429-29.696 18.578286-32.841143 15.433143-28.598857 5.12l-1.170286 0q-13.165714 0-28.598857-5.12t-32.841143-15.433143-29.696-18.578286-30.866286-21.723429-24.283429-17.408q-52.004571-36.571429-149.723429-104.301714t-117.174857-81.408q-35.401143-23.990857-66.852571-65.974857t-31.451429-77.970286q0-44.544 23.698286-74.313143t67.730286-29.696l841.142857 0q37.156571 0 64.292571 26.843429t27.136 64.585143z" p-id="9774" fill="#4289ff"></path></svg></a></dt>
                                    <dd>2582347430@qq.com</dd>
                                </span>
                            <span>
                                    <dt><a href="tel:+8613063509980"><svg t="1580195327065" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10241" width="27" height="27"><path d="M914.285714 708.534857q0 15.433143-5.705143 40.301714t-11.995429 39.131429q-11.995429 28.598857-69.705143 60.562286-53.686857 29.110857-106.276571 29.110857-15.433143 0-29.988571-1.974857t-32.841143-7.168-27.136-8.265143-31.744-11.702857-28.013714-10.313143q-56.027429-19.968-99.986286-47.396571-73.142857-45.129143-151.113143-123.172571t-123.172571-151.113143q-27.428571-44.032-47.396571-99.986286-1.682286-5.12-10.313143-28.013714t-11.702857-31.744-8.265143-27.136-7.168-32.841143-1.974857-29.988571q0-52.589714 29.110857-106.276571 32.036571-57.709714 60.562286-69.705143 14.262857-6.290286 39.131429-11.995429t40.301714-5.705143q7.972571 0 11.995429 1.682286 10.313143 3.437714 30.281143 43.446857 6.290286 10.825143 17.115429 30.866286t19.968 36.278857 17.700571 30.573714q1.682286 2.267429 10.020571 14.262857t12.288 20.260571 4.022857 16.310857q0 11.410286-16.310857 28.598857t-35.401143 31.451429-35.401143 30.281143-16.310857 26.258286q0 5.12 2.852571 12.873143t4.827429 11.702857 7.972571 13.677714 6.582857 10.825143q43.446857 78.262857 99.401143 134.290286t134.290286 99.401143q1.170286 0.585143 10.825143 6.582857t13.677714 7.972571 11.702857 4.827429 12.873143 2.852571q10.313143 0 26.258286-16.310857t30.281143-35.401143 31.451429-35.401143 28.598857-16.310857q7.972571 0 16.310857 4.022857t20.260571 12.288 14.262857 10.020571q14.262857 8.557714 30.573714 17.700571t36.278857 19.968 30.866286 17.115429q40.009143 19.968 43.446857 30.281143 1.682286 4.022857 1.682286 11.995429z" p-id="10242" fill="#4289ff"></path></svg></a></dt>
                                    <dd>(+86)13063509980</dd>
                                </span>
                        </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>21.-webkit-box-reflect</h5>
            <div class="demo-21">
                <div class="scene">
                    <div class="card" @click="turnCard(1)" :style="{transform: turnAround === 1 ? 'rotateY(.5turn)': ''}">
                        <div class="card__face card__face--front">
                        <img src="../../../assets/images/cnKl1Ykd5rZCVwm.jpg" />
                        </div>
                        <div class="card__face card__face--back">
                        <img src="../../../assets/images/cqyJiYlRwnTeHmj.jpg" />
                        </div>
                    </div>
                    <div class="card" @click="turnCard(2)" :style="{transform: turnAround === 2 ? 'rotateY(.5turn)': ''}">
                        <div class="card__face card__face--front">
                        <img src="../../../assets/images/FLnzi5Kq4tkRZSm.webp" />
                        </div>
                        <div class="card__face card__face--back">
                        <img src="../../../assets/images/buDT4YS6zUMfHst.jpg" />
                        </div>
                    </div>
                    <div class="card" @click="turnCard(3)" :style="{transform: turnAround === 3 ? 'rotateY(.5turn)': ''}">
                        <div class="card__face card__face--front">
                        <img src="../../../assets/images/uXF1Kx7lzELB6wf.jpg" />
                        </div>
                        <div class="card__face card__face--back">
                        <img src="../../../assets/images/RtVq2wxQYySDb8L.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="demo">
            <h5>22.web animations</h5>
            <div class="demo-22">
                <ul class="menu-hover-image">
                    <li class="menu-item" v-for="item in webAnimations" :key='item.tit' >
                        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
                            <h1>{{item.tit}}</h1>
                            <span>{{item.desc}}</span>
                        </div>
                    </li>
                    <div class="cursor" ref="cursor"></div>
                </ul>
            </div>
        </div>
        <div class="demo">
            <h5>CSS Houdini</h5>
            <div class="demo-23">
                <div class="mawaru">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
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
            loading: 'Loading',
            turnAround: 0,
            webAnimations: [
                {
                    tit: 'Home',
                    desc: 'alphardex'
                },
                {
                    tit: 'Projects',
                    desc: 'CSS Creations'
                },
                {
                    tit: 'Blogs',
                    desc: 'Memories'
                },
                {
                    tit: 'About',
                    desc: 'CSS Wizard'
                }
                
            ]
        }
    },
    mounted () {
        if(window.CSS) {
            CSS.registerProperty({
                name: '--color1',
                syntax: '<color>',
                initialValue: 'transparent',
                inherits: true
            });

            CSS.registerProperty({
                name: '--color2',
                syntax: '<color>',
                initialValue: 'transparent',
                inherits: true
            });

            CSS.registerProperty({
                name: '--pos',
                syntax: '<length-percentage>',
                initialValue: '0',
                inherits: true
            })
        }
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
        },
        turnCard(num) {
            this.turnAround = num
        },
        mouseEnter(e) {
            let [x, y] = [e.layerX, e.layerY]
            this.$refs.cursor.style.opacity = 1
            this.$refs.cursor.style.transform = `translate(${x}px, ${y}px) scale(1)`
            
        },
        mouseLeave(e) {
            let [x, y] = [e.layerX, e.layerY]
            
            this.$refs.cursor.style.transform = `scale(0)`
            this.$refs.cursor.style.opacity = 0
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
    height: 500px;
    padding: 30px;
    background-image: linear-gradient(rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)),
    url('../../../assets/images/buDT4YS6zUMfHst.jpg');
  background-size: cover;
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
    height: 500px;
    background: linear-gradient(
      rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)
    ),url('../../../assets/images/RtVq2wxQYySDb8L.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lora, serif;
    padding: 30px;
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
.demo-16{
    @function sample($list) {
        @return nth($list, random(length($list)));
    }

    @function bubbles($color, $count: 16) {
        $bubbles: ();
        // define your own bubbles here!
        $bubble-types: (
            radial-gradient(circle, $color 20%, transparent 20%),
            radial-gradient(circle, transparent 20%, $color 20%, transparent 30%)
        );
        @for $i from 1 through $count {
            $bubbles: append($bubbles, sample($bubble-types), comma);
        }
        @return $bubbles;
    }

    @function random_range($min, $max) {
        $rand: random();
        $random_range: $min + floor($rand * (($max - $min) + 1));
        @return $random_range;
    }

    @function random_sizes($count: 16) {
        $sizes: ();
        @for $i from 1 through $count {
            $sizes: append(
            $sizes,
            (random_range(10, 20) * 1%) (random_range(10, 20) * 1%),
            comma
            );
        }
        @return $sizes;
    }

    .btn {
        $hue: 330;
        $btn-bg-color: hsl($hue, 100%, 50%);
        $btn-bg-color-darker: hsl($hue, 100%, 45%);
        position: relative;
        padding: 0.75rem 1.5rem;
        margin: 1rem;
        font-size: 1rem;
        font-family: Lato, sans-serif;
        line-height: 1.5;
        color: white;
        text-decoration: none;
        background-color: $btn-bg-color;
        border: 1px solid $btn-bg-color;
        border-radius: 4px;
        box-shadow: 0 0.1px 0.7px rgba(233, 30, 99, 0.141),
            0 0.1px 1.7px rgba(233, 30, 99, 0.202),
            0 0.3px 3.1px rgba(233, 30, 99, 0.25),
            0 0.4px 5.6px rgba(233, 30, 99, 0.298),
            0 0.8px 10.4px rgba(233, 30, 99, 0.359),
            0 2px 25px rgba(233, 30, 99, 0.5);
        outline: transparent;
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        transition: 0.25s;

        &-bubbles {
            overflow: visible;
            transition: transform ease-in 0.1s, background-color ease-in 0.1s,
            box-shadow ease-in 0.25s;

            &:before {
                position: absolute;
                content: "";
                left: -2em;
                right: -2em;
                top: -2em;
                bottom: -2em;
                transition: ease-in-out 0.5s;
                background-repeat: no-repeat;
                background-image: bubbles($btn-bg-color);
                background-size: random_sizes();
                background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
                    65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
                    64% 70%, 80% 71%;
                animation: bubbles ease-in-out 0.75s forwards;
            }

            &:active {
                transform: scale(0.95);
                background: $btn-bg-color-darker;

                &:before {
                    // when the clicked mouse is up, trigger the animation.
                    animation: none;
                    background-size: 0;
                }
            }
        }
    }

    @keyframes bubbles {
        0% {
            background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
            65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
            64% 70%, 80% 71%;
        }

        50% {
            background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
            75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
            68% 96%, 95% 100%;
        }

        100% {
            background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
            100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
            100% 100%;
            background-size: 0% 0%;
        }
    }
}
.demo-17{
    ul {
        display: flex;
        list-style-type: none;

        .circle-gauge {
            $gauge-colors: #e74c3c, #3498db, #2ecc71, #f1c40f;
            --gauge-max-value: 1000;

            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1em;

            @for $i from 1 through 4 {
            &:nth-child(#{$i}) a {
                --percentage: calc(var(--gauge-value) / var(--gauge-max-value) * 100%);
                background: conic-gradient(
                nth($gauge-colors, $i) var(--percentage),
                #111 0
                );
            }
            }

            a {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 5em;
                height: 5em;
                font-family: Lato, sans-serif;
                text-decoration: none;
                color: white;
                background: transparent;
                border-radius: 50%;
                counter-reset: value var(--gauge-value);

                &::before {
                    position: absolute;
                    content: counter(value);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90%;
                    height: 90%;
                    background: #222;
                    border-radius: inherit;
                }
            }
        }

        span {
            padding-top: 10px;
            font-size: 12px;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: white;
        }
    }
}
.demo-18{
    height: 500px;
    background: url('../../../assets/images/GAYyzeKsiWjP5qO.webp') no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .frosted-glass {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 60px;
        box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
            0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
            0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(20px);
        transition: 0.5s ease;

        &:hover {
            box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
            0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
            0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
        }

        .title {
            padding-left: 0.375em;
            font-size: 3.6em;
            font-family: Lato, sans-serif;
            font-weight: 200;
            letter-spacing: 0.75em;
            color: white;

            @media (max-width: 640px) {
            font-size: 2em;
            }
        }
    }
}
.demo-19{
    position: relative;
    height: 400px;
    video,
    h1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    video {
        object-fit: cover;
    }

    h1 {
        font-size: 20vw;
        font-family: Biko, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        background: white;
        mix-blend-mode: screen;
    }
}
.demo-20{
    font-family: Lato, sans-serif;
    .shadow {
        filter: drop-shadow(-2px 2px 8px rgba(50, 50, 0, 0.5));
    }

    .card {
        clip-path: inset(0 0 70% 0);
        transform: translateY(30%);
        transition: 0.5s ease;

        .card-header {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 100px;
            font-size: 2em;
            color: white;
            background-color: #2979ff;
            clip-path: inset(0 19% 0 19%);
            transition: 0.5s ease;
        }

        .card-body {
            box-sizing: border-box;
            padding: 1.25em;
            width: 400px;
            height: 225px;
            font-size: 1.5em;
            background: white;
            clip-path: inset(0 19% 0 19%);
            transition: 0.5s ease;

            dl {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                margin: 0;
            }

            span {
                opacity: 0;
                transform: translateY(100%);
                transition: 0.5s ease-in;

                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) {
                    transition-delay: $i * 0.1s;
                    }
                }

                dt,
                dd {
                    display: inline;
                    margin: 0;

                    svg {
                        margin-right: 0.3em;
                    }
                }
            }
        }

        &:hover {
            transform: translateY(0);
            clip-path: inset(0 0 0 0);

            .card-header,
            .card-body {
                clip-path: inset(0 0 0 0);
            }

            span {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
}
.demo-21{
    margin: 80px 0;
    .scene {
        width: 1000px;
        display: flex;
        justify-content: space-between;
        -webkit-perspective: 800px;
        perspective: 800px;

        .card {
            position: relative;
            width: 240px;
            height: 300px;
            color: white;
            cursor: pointer;
            transition: 1s ease-in-out;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            // transform: rotateY(90deg);
            

            &:active {
                transform: rotateY(0.5turn);
            }

            .card__face {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                // transition: 1s ease-in-out;
                -webkit-box-reflect: below 0 linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

                img {
                    width: 240px;
                    height: 300px;
                    object-fit: cover;
                }

                &--back {
                    transform: rotateY(0.5turn);
                }
            }
        }
    }
}
.demo-22{
    margin: 80px 0;
    .menu-hover-image {
        position: relative;
        width: 56rem;
        margin-bottom: 12rem;
        font-family: Lora, serif;
        list-style-type: none;

        .cursor {
            position: absolute;
            top: -50%;
            left: -25%;
            z-index: -1;
            width: 600px;
            height: 400px;
            background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
            background-position: 50% 50%;
            background-size: cover;
            transition: all .2s;
            transform:scale(0);
            opacity: 0;
        }

        .menu-item {
            cursor: pointer;
            $menu-image-urls: url('../../../assets/images/buDT4YS6zUMfHst.jpg'),
            url('../../../assets/images/uXF1Kx7lzELB6wf.jpg'),
            url('../../../assets/images/cnKl1Ykd5rZCVwm.jpg'),
            url('../../../assets/images/RtVq2wxQYySDb8L.jpg');

            @for $i from 1 through 4 {
                &:nth-child(#{$i}):hover~.cursor {
                    background-image: nth($menu-image-urls, $i);
                }
            }

            > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                text-decoration: none;
                color: white;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                mix-blend-mode: difference;
                transform: translate3d(0, 0, 0);  // just make "mix-blend-mode" work properly.
            }
        }
    }
}
.demo-23{
    .mawaru {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    // https://coolors.co
    $circle-colors: #50514F,
      #F25F5C,
      #FFE066,
      #247BA0,
      #70C1B3,
      #1D3557,
      #88ABC0,
      #FFCDB2;

    position: absolute;
    background: conic-gradient(var(--color1) var(--pos), var(--color2) 0);
    border-radius: 50%;

    @for $i from 1 through 8 {
      &:nth-child(#{$i}) {
        $color1: nth($circle-colors, $i);
        --color1: #{$color1};

        z-index: 8 - $i;
        width: 4em * $i;
        height: 4em * $i;
        // Use step-end to switch color1 and color2 every time the first pos animation finished.
        animation: pos 0.6s linear,
        color1 1.2s step-end,
        color2-#{$i} 1.2s step-end;
        animation-iteration-count: 2;
        animation-delay: 0.4s * $i;
      }

      @keyframes color2-#{$i} {
        50% {
          --color2: #{nth($circle-colors, $i)};
        }
      }
    }
  }
}
    @keyframes pos {
  to {
    --pos: 100%;
  }
}

@keyframes color1 {
  50% {
    --color1: transparent;
  }
}
}
</style>