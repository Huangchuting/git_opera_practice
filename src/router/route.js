import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter)

import Home from '../main/home/home.vue'

import About from '../main/about/about.vue'
import Slider from '../main/about/view/Slider.vue'
import MyTable from '../main/about/view/Table.vue'
import AnotherTable from '../main/about/view/anotherTable.vue'

import Form from '../main/form/form.vue'

import Excel from '../main/excel/view/excel.vue'

import CSSDemo from '../main/cssDemo/cssDemo.vue'
import TextGradient from '../main/cssDemo/views/textGradient.vue'

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
            }
        ],
        redirect: 'cssdemo/textGradient'
    }
    
]

var router = new VueRouter({
    routes
})
export default router