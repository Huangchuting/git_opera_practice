<template>
    <div>
        <div class="demo">
            <h5>background-position 实现渐变过渡</h5>
            <div class="demo-1"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.demo-1{
    height: 200px;
    background: linear-gradient(to right, olive, green, purple);
    background-size: 200%;
    transition: background-position .5s jump-both;   
    &:hover{
        background-position: 100% 0; 
    } 
}
</style>