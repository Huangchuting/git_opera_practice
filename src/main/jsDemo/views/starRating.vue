<template>
    <div>
        <ul class="rating" id="rating">
            <li class="rating-item" v-for="(item,i) in rankList" :key="i" :title="item" ></li>
        </ul>
        <ul class="rating" id="rating2">
            <li class="rating-item" v-for="(item,i) in rankList" :key="i" :title="item" ></li>
        </ul>
    </div>
</template>
<script>
import StarRating from '../js/starRating'
export default {
    data () {
        return {
            rankList: ['很不好', '不好', '一般', '好', '很好']
        }
    },
    mounted () {
        StarRating()
    }
}
</script>
<style lang="scss" scoped>
.rating{
    width: 160px;
    height: 32px;
    margin: 100px auto;
    .rating-item{
        float: left;
        width: 32px;
        height: 32px;
        background: url('../../../assets/images/iVPGGC.png') no-repeat;
        cursor: pointer;
    }
}
</style>