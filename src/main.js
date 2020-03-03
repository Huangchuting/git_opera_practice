import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueI18n from 'vue-i18n'
import App from './App'
import router from './router/route'
require('jquery')
// import Validator from './plugins/validator1'
// import va from './plugins/va'
// import './plugins/validate'
import './directive/directive'
import Toast from './plugins/toast'
import './assets/css/index.css'
import './assets/fonts/iconfont.css'
import './assets/fonts/webfonts/webfonts.css'

require('./mock/mock.js')



Vue.use(ElementUI)
Vue.use(Toast)
new Vue({
    el: '#appIndex',
    router,
    render: h => h(App)
})