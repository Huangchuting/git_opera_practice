import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import './index.css'

require('./mock/mock.js')

Vue.use(ElementUI)
new Vue({
    el: '#appIndex',
    render: h => h(App)
})