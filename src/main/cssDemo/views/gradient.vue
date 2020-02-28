<template>
    <div>
        <div class="demo-1 demo"></div>
        <div class="demo-2 demo"></div>
        <div class="demo-3 inline-demo">radial</div>
        <div class="demo-4 inline-demo">farthest-corner</div>
        <div class="demo-5 inline-demo">closest-side</div>
        <div class="demo-6 inline-demo">closest-corner</div>
        <div class="demo-7 inline-demo">farthest-side</div>
        <div class="demo-8 inline-demo">60px</div>
        <div class="demo-9 inline-demo">60px 40px</div>
        <div class="demo-10 inline-demo">circle 100px</div>
        <div class="demo-11 inline-demo">ellipse 100px 60px</div>
        <hr/>
        <div class="demo-c1 inline-demo">斜切角1</div>
        <div class="demo-c2 inline-demo">斜切角2</div>
        <div class="demo-c3 inline-demo">斜切角3</div>
        <div class="demo-c4 inline-demo">曲线切口</div>
        <div class="demo-c5 inline-demo">svg border-image</div>
        <div class="demo-c6 inline-demo">clip-path</div>
        <!-- <div>将来还有corner-shape</div> -->
        <hr/>
        <div class="demo-d1 inline-demo"></div>
        <div class="demo-d2 inline-demo"></div>
        <hr/>
        <div class="demo-100"></div>
    </div>
</template>
<style lang="scss" scoped>
.demo{
    height: 200px;
    margin-bottom: 50px;
}
.demo-1{
    background-image: linear-gradient(red, green);
}
.demo-2{
    background-image: linear-gradient(0deg,red 0,red 50%, green 50% , green 100%);
}
.inline-demo{
    display: inline-block;
    color:#fff;
    font-size: 20px;
    text-align-last: center;
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
    vertical-align: middle;
}
.demo-3{
    background-image: radial-gradient(red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-4{
    background-image: radial-gradient(farthest-corner,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-5{
    background-image: radial-gradient(closest-side,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-6{
    background-image: radial-gradient(closest-corner,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-7{
    background-image: radial-gradient(farthest-side,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-8{
    background-image: radial-gradient(60px,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-9{
    background-image: radial-gradient(60px 40px,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-10{
    background-image: radial-gradient(circle 100px,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-11{
    background-image: radial-gradient(ellipse 100px 60px,red 0,red 5%, green 5% , green 50%,blue 50%, blue 100%);
}
.demo-c1{
    background:linear-gradient(-45deg, transparent 15px, #58a 0);
}
.demo-c2{
    background:linear-gradient(-45deg, transparent 15px, #58a 0) right,
        linear-gradient(45deg, transparent 15px, #58a 0) left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
}
.demo-c3{
    background:linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
        linear-gradient(45deg, transparent 15px, #58a 0) bottom left,
        linear-gradient(-135deg, transparent 15px, #58a 0) top right,
        linear-gradient(135deg, transparent 15px, #58a 0) top left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
.demo-c4{
    background:radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
        radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left,
        radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
        radial-gradient(circle at top left, transparent 15px, #58a 0) top left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
.demo-c5{
    border: 20px solid #58a;
    border-image: 1 url('data:image/svg+xml,\<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\<polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\</svg>');
    background-color:#58a;
    background-clip: padding-box;
}
.demo-c6{
    background: #58a;
    // polygon(<x1> <y1>, <x2> <y2>, ...., <xn> <yn>)
    clip-path: polygon( 
        20px 0, 
        calc(100% - 20px) 0, 
        100% 20px, 
        100% calc(100% - 20px), 
        calc(100% - 20px) 100%, 
        20px 100%, 
        0 calc(100% - 20px),
        0 20px
    );
    // clip-path: polygon( 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px );
}
.demo-d1{
    background: radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
        radial-gradient(at 100% 100%,rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px),#8a3;
    background-size: 20px 20px;
    // background-repeat: no-repeat;
}
.demo-d2{
    background:linear-gradient(63deg, #999 23%, transparent 23%) 7px 0,
        linear-gradient(63deg, transparent 74%, #999 78%),
        linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%),#444;
    background-size: 16px 48px;
    // background-repeat: no-repeat;
}
.demo-100{
    height: 199px;
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, #999 50%, #999 100%),
        linear-gradient(to bottom, #999 0 , #999 39px, #ccc 39px, #ccc 40px);
    background-size: 10px 40px, 40px 40px;
}
</style>