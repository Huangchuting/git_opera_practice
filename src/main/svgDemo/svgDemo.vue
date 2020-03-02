<template>
    <div>
        <svg width="300" height="200">
            <rect width="100%" height="100%" fill="red"></rect>
            <circle cx="150" cy="100" r="80" fill="green"></circle>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        <svg width="300" height="200">
            <rect width="100%" height="100%" fill="yellow"></rect>
            <path d="M10 10 H90 V90 H10 Z"></path>
            <circle cx="10" cy="10" r="2" fill="green"></circle>
        </svg>
        <svg width="325px" height="325px" >
            <rect width="100%" height="100%" fill="pink"></rect>
            <path d="M10 315
                    L110 215 
                    A30 50 0 0 1 162 162
                    L172 152
                    A30 50 -45 0 1 215 109
                    L315 10"
                stroke="red"
                fill="green"
                stroke-width="2"
                fill-opacity=".5"></path>
        </svg>
        <svg width="120" height="240">
            <defs>
                <linearGradient id="gradient1">
                    <stop class="stop1" offset="0%"></stop>
                    <stop class="stop2" offset="50%"></stop>
                    <stop class="stop3" offset="100%"></stop>
                </linearGradient>
                <linearGradient id="gradient2" x1="0"  x2="1"  y1="2" y2="0">
                    <stop offset="0%" stop-color="red"></stop>
                    <stop offset="50%" stop-color="black" stop-opacity="0"></stop>
                    <stop offset="100%" stop-color="blue"></stop>
                </linearGradient>
            </defs>
            <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100"></rect>
            <rect  x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#gradient2)"></rect>
        </svg>
        <svg width="300" height="300">
            <circle cx="150" cy="150" r="75" stroke="blue" fill="transparent"></circle>
            <circle cx="120" cy="130" r="6" stroke="blue" fill="transparent"></circle>
            <circle cx="180" cy="130" r="6" stroke="blue" fill="transparent"></circle>
            <path d="M105 160 A30 30 0 0 0 195 160" id="text_path" stroke="blue" stroke-width="1" fill="transparent"></path>
            <text>
                <!-- <textPath xlink:href="#text_path">this text follow a path</textPath> -->
            </text>
        </svg>
        <svg width="300" height="300">
            <defs>
                <linearGradient id="gradient5">
                    <stop offset="5%" stop-color="white"></stop>
                    <stop offset="95%" stop-color="blue"></stop>
                </linearGradient>
                <linearGradient id="gradient6" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stop-color="red"></stop>
                    <stop offset="95%" stop-color="orange"></stop>
                </linearGradient>
                <pattern id="pattern" x="0" y="0" width=".25" height=".25" patternContentUnits="objectBoundingBox">
                    <rect x="0" y="0" width=".25" height=".25" fill="skyblue"></rect>
                    <rect x="0" y="0" width=".125" height=".125" fill="url(#gradient6)"></rect>
                    <circle cx=".125" cy=".125" r=".1" fill="url(#gradient5)" fill-opacity=".5"></circle>
                </pattern>
            </defs>
            <rect fill="url(#pattern)" stroke="black" x="0" y="0" width="300" height="300"></rect>
        </svg>
        <svg width="120" height="120" class="progress-ring">
            <circle stroke="blue" stroke-width="4" class="progress-ring__circle"  fill="transparent" r="52" cx="60" cy="60"></circle>
        </svg>
        <input id="changeNumber" type="number" value="50" min="0" max="100"/>
        <svg width="100" height="100" viewBox="0 0 100 100">
            <image id="clip-path" x="0" y="0" width="100" height="100" xlink:href="../../assets/images/clip-path.webp"></image>
        </svg>
    </div>
</template>
<script>
import {round} from './js/demo'
export default {
    data () {
        return {

        }
    },
    mounted () {
        round()
    }
}
</script>
<style lang="scss" scoped>
#rect1{fill:url(#gradient1);}
.stop1{stop-color: red;}
.stop2{stop-color: black; stop-opacity: 0;}
.stop3{stop-color: blue;}
.progress-ring__circle{
    transition: stroke-dashoffset .35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    &:hover{
        stroke-dashoffset: 100%;
    }
}
</style>