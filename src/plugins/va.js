var va = {}
va.install = function (Vue, options) {
    Vue.directive('va', {
        bind (el, binding, vnode) {
            console.log(el, binding, vnode)
            var field = binding.arg === 'EXTEND' ? el.getAttribute('name') : binding.arg // 当arg为EXTEND，从name属性获得值
            var option = binding.modifiers                    //特殊配置（允许非空，编辑新增共用等）
            var value = el.value                              //输入框的初始值
            var group = el.getAttribute('group') || 'base'    //分组，一个表单框在多个组呢？这个还没设，要兼容。 通过类似 'group1 group2 group3 group4'
            var tag = el.getAttribute('tag')
            var regMsg = el.getAttribute('regMsg') || ''   //针对正则的自定义报错
            var baseRule = []                              //默认的校验规则             --不用写，默认存在的规则（如非空），优先级最高
            var customRule = []                            //用户自定义的规则（组件中） --bingding.value
            var optionalRule = []                          //配置项中引申出来的规则，优先级最低
        }
    })
}
export default va