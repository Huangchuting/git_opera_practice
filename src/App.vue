<template>
    <div id="app">
        <div class="wrap">
            <slider 
                :sliderItems="sliderData1"
                ref="slider1"
                >
            </slider>
        </div>
        <div class="wrap">
            <slider 
                :sliderItems="sliderData2"
                ref="slider2"
                :slider-bar="false"
                slider-class="slider-custom"
                >
            </slider>
        </div>
        <div class="chat-room-wrap">
            <chat-room></chat-room>
        </div>
        <div class="table-wrp">
            <my-table></my-table>
        </div>
    </div>
</template>
<script>
import api from './api/api.js'
import slider from './components/slider'
import chatRoom from './components/chatRoom'
import myTable from './components/myTable'
export default {
    data () {
        return {
            sliderData1: [],
            sliderData2: []
        }
    },
    components: {
        slider, chatRoom, myTable
    },
    mounted () {
        this.initTab()
    },
    methods: {
        initTab () {
            api.getTabData().then(res => {
                this.sliderData1 = res.data.tabData
                this.$nextTick(() => {
                    this.$refs.slider1.initSlider()
                })
                
            }).catch(error => {
                console.log(error)
            })

            api.getTabData().then(res => {
                this.sliderData2 = res.data.tabData
                this.$nextTick(() => {
                    this.$refs.slider2.initSlider()
                })
                
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    padding: 0 20px;
    .slider-custom /deep/ .slider-item {
        border-left: 1px solid #ccc;
        line-height: 30px !important;
        color: #666;
        &:first-child{
            border-left:none; 
        }
    }
}
.chat-room-wrap{
    width: 800px;
    height: 600px;
    padding: 20px;
    border:1px solid #999;
    border-radius: 5px;
}
.table-wrp{
    margin: 50px auto;
    width: 400px;
    height: 300px;
    overflow: auto;
    border:1px solid #999;
}
</style>


