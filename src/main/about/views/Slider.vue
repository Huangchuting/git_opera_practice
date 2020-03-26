<template>
    <div>
        <slider 
            :sliderItems="sliderData1"
            ref="slider1"
            >
        </slider>
    </div>
</template>
<script>
import slider from '../../../components/slider'
import api from '../../../api/api.js'
export default {
    data () {
        return {
            sliderData1: []
        }
    },
    components: {
        slider
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
        }
    }
}
</script>

