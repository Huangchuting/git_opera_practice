<template>
<div class="wrap" :class="[sliderClass]">
    <div class="slider" ref="slider">
        <div class="slider-group" :style="{'transform':`translateX(${translateX}px)`}" ref="sliderGroup">
            <div 
                class="slider-item " 
                :class="{'slider-item-active': curIndex === index}" 
                v-for="(item, index) in data" 
                :key="index" 
                @click="clickTab(index, item)"
            >
                {{item.name}}
            </div>
            <div class="slider-bar" v-if="sliderBar" :style="{'transform':`translateX(${translateXBar}px)`, 'width': `${barWidth}px`}"></div>
        </div>
        
    </div>
    <div class="arrow-wrap">
        <span class="arrow arrow-prev" :class="{'disabled': curIndex === 0}" @click="clickTabPrev">&lt;</span>
        <span class="arrow arrow-next" :class="{'disabled': curIndex === data.length - 1}"  @click="clickTabNext">&gt;</span>
    </div>
    
</div>
    
</template>
<script>

export default {
    props: {
        sliderItems: {
            type: Array,
            default: []
        },
        sliderBar: {
            type: Boolean,
            default: true
        },
        sliderClass: String
    },
    data () {
        return {
            data: [],
            curIndex: 0,
            translateX: 0,
            sliderWidth: 0,
            scrollWidth: 0,
            children: '',
            translateXBar: 0,
            barWidth: 0
        }
    },
    watch: {
        sliderItems: function (val) {
            this.data = val
        }
    },
    mounted () {
    },
    methods: {
        
        initSlider () {
            this.children = this.$refs.sliderGroup.children
            this.sliderWidth = this.$refs.slider.clientWidth
            let dataLength  = this.sliderBar ? this.children.length - 1 : this.children.length
            for (let i = 0; i < dataLength; i++) {
                let children = this.children[i]
                let childWidth = children.clientWidth
                this.data[i].width = childWidth
                this.data[i].offsetLeft = children.offsetLeft
                this.scrollWidth += childWidth
            }
            this.barWidth = this.data[0].width
            this.$refs.sliderGroup.style.width = this.scrollWidth + 'px'
        },
        clickTab (index, item) {
            this.curIndex = index
            
            this.barWidth = item.width
            this.translateXBar = item.offsetLeft
            if (-item.offsetLeft > this.translateX) {
                this.translateX = this.curIndex !== 0 ?  -(this.translateX + item.offsetLeft) + this.translateX  : 0
            }
            if (item.width + item.offsetLeft + this.translateX > this.sliderWidth) {
                this.translateX = this.sliderWidth - item.width - item.offsetLeft
            }
        },
        clickTabPrev () {
            if (this.curIndex === 0) return
            this.curIndex--
            let curTab = this.data[this.curIndex]
            this.barWidth = curTab.width
            this.translateXBar = curTab.offsetLeft
            if (-curTab.offsetLeft > this.translateX) {
                this.translateX = this.curIndex !== 0 ?  -(this.translateX + curTab.offsetLeft) + this.translateX  : 0
            }
        },
        clickTabNext () {
            let length = this.data.length - 1
            if (this.curIndex === length) return
            this.curIndex++
            let curTab = this.data[this.curIndex]
            this.barWidth = curTab.width
            this.translateXBar = curTab.offsetLeft
            if (curTab.width + curTab.offsetLeft + this.translateX > this.sliderWidth) {
                this.translateX = this.sliderWidth - curTab.width - curTab.offsetLeft
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    width: 100%;
    display: flex;
    align-items: center;
    .slider{
        flex: 1;
        overflow: hidden;
        
        .slider-group{
            
            white-space: nowrap;
            transition: transform 0.5s;
            position: relative;
            .slider-item{
                display: inline-block;
                cursor: pointer;
                line-height: 52px;
                padding: 0 15px;
                &.slider-item-active{
                    color:#3b50ce;
                }
            }
            .slider-bar{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 4px;
                background: #3b50ce;
                transition: transform 0.2s;
            }
        }
    } 
    .arrow-wrap{
        padding-left: 30px;
        font-size: 20px;
        color: #3b50ce;
        .arrow{
            cursor: pointer;
            &.disabled{
                cursor:not-allowed;
                color:#e5e5e5;
            }
        }
        .arrow-prev{
            margin-right: 15px;
        }
    } 
}

</style>


