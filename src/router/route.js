import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter)

import Home from '../main/home/home.vue'

import About from '../main/about/about.vue'
import Slider from '../main/about/views/Slider.vue'
import MyTable from '../main/about/views/Table.vue'
import AnotherTable from '../main/about/views/anotherTable.vue'
import CompDemo from '../main/about/views/compDemo.vue'

import Form from '../main/form/form.vue'

import Excel from '../main/excel/views/excel.vue'

import CSSDemo from '../main/cssDemo/cssDemo.vue'
import TextGradient from '../main/cssDemo/views/textGradient.vue'
import Demo from '../main/cssDemo/views/demo.vue'
import RandomParticle from '../main/cssDemo/views/randomParticle.vue'
import Shadow from '../main/cssDemo/views/shadow.vue'
import Dialog from '../main/cssDemo/views/dialog.vue'
import SelfDemo from '../main/cssDemo/views/selfDemo.vue'
import Gradient from '../main/cssDemo/views/gradient.vue'
import ClipPath from '../main/cssDemo/views/clipPath.vue'
import Transition from '../main/cssDemo/views/transition.vue'

import Canvas from '../main/canvas/canvas.vue'

import SvgDemo from '../main/svgDemo/svgDemo.vue'

import JSDemo from '../main/jsDemo/jsDemo.vue'
import StarRating from '../main/jsDemo/views/starRating.vue'
import Practise from '../main/jsDemo/views/practise.vue'

let routes = [
    {
        path: '/', 
        redirect: '/about' 
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'slider',
                component: Slider
            },
            {
                path: 'myTable',
                component: MyTable
            },
            {
                path: 'anotherTable',
                component: AnotherTable
            },
            {
                path: 'compDemo',
                component: CompDemo
            }
        ],
        redirect: 'about/myTable'
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: '/excel',
        component: Excel
    },
    {
        path: '/cssdemo',
        component: CSSDemo,
        children: [
            {
                path: 'textGradient',
                component: TextGradient
            },
            {
                path: 'demo',
                component: Demo
            },
            {
                path: 'randomParticle',
                component: RandomParticle
            },
            {
                path: 'shadow',
                component: Shadow
            },
            {
                path: 'dialog',
                component: Dialog
            },
            {
                path: 'selfDemo',
                component: SelfDemo
            },
            {
                path: 'gradient',
                component: Gradient
            },
            {
                path: 'clipPath',
                component: ClipPath
            },
            {
                path: 'transition',
                component: Transition
            }
        ],
        redirect: 'cssdemo/textGradient'
    },
    {
        path: '/canvas',
        component: Canvas
    },
    {
        path: '/svgDemo',
        component: SvgDemo
    },
    {
        path: '/jsDemo',
        component: JSDemo,
        children: [
            {
                path: 'starRating',
                component: StarRating
            },
            {
                path: 'practise',
                component: Practise
            }
        ],
        redirect: 'jsDemo/starRating'
    }
    
]

var router = new VueRouter({
    routes
})
export default router