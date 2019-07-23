var Toast = {}
Toast.install = function (Vue, options) {
    Vue.prototype.$toast = (tips) => {
        let toastTpl = Vue.extend({ // 1. 创建构造器，定义好提示信息的模板
            template: `<div class='vue-toast'>${tips}</div>`
        })
        let tpl = new toastTpl().$mount().$el // 2.创建实例，挂载到文档以后的地方
        document.body.appendChild(tpl) // 3.把创建的实例添加到body中
        setTimeout(function () {
            document.body.removeChild(tpl)
        })
    }
}
module.exports = Toast