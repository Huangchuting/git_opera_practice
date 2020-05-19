<template>
    <div class="grid-wrp">
        <div class="wrapper">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.grid-wrp{
    height: 100%;
    .wrapper{
        display: grid;
        height: 100%;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-rows: 100px 200px auto ;
        gap:10px;
        grid-template-areas: 'a a c'
                       'd e f'
                       'g h i';
        grid-auto-flow: column dense;
        > div {
            color:#fff;
            &:nth-of-type(1) {background: chartreuse;}
            &:nth-of-type(2) {background: rgb(0, 47, 255);}
            &:nth-of-type(3) {background: rgb(255, 81, 0);}
            &:nth-of-type(4) {background: rgb(0, 60, 255);}
            &:nth-of-type(5) {background: rgb(138, 206, 71);}
            &:nth-of-type(6) {background: rgb(255, 0, 43);}
            &:nth-of-type(7) {background: rgb(195, 0, 255);}
            &:nth-of-type(8) {background: rgb(229, 255, 0);}
            &:nth-of-type(9) {background: rgb(0, 255, 255);}
        }
    }
}
</style>