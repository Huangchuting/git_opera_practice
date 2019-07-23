/**
 * 默认规则：
 * 1、不为空
 * 2、电话号码校验
 * 3、邮箱校验
 */
// 默认规则正则表
let regList = {
    required: true,
    Mobile: /^1[3|4|5|7|8]\d{9}$/,
    Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  }
  // 默认规则错误信息
  let msgList = {
    required: '必填',
    Mobile: '请输入正确的手机号',
    Mail: '请输入正确的邮箱'
  }
  // 规则构造器
  function Rule (ruleName, ruleValue, ruleMsg) {
    this.ruleName = ruleName
    this.ruleValue = ruleValue
    this.msg = ruleMsg
  }
  // 挂在vue实例上面$va
  function createVa (vm, domSelector) {
    let va = {
      ruleListRank: [],
      forms: {},
      checkRule: checkRule,
      checkAll: checkAll
    }
    if (vm.$va) {
      return vm.$va
    } else {
      vm.$va = va
      return vm.$va
    }
  }
  // va构造器挂在vue实例上面$va的forms上面
  function VaForm (el, finalRule) {
    this.dom = el
    this.rules = finalRule
  }
  // 断言函数
  function assert (condition, message) {
    if (!condition) {
      console.error('[validator-warn]:' + message)
    }
  }
  // 挂载va上的方法================================================>
  // 校验表单的全部字段
  function checkAll () {
    let ruleListRank = this.ruleListRank
    let forms = this.forms
    let checkRule = this.checkRule
    let checkFlag = true
    for (let name of ruleListRank) {
      let dom = forms[name].dom
      let rules = forms[name].rules
      let flag = checkRule(dom, rules)
      if (flag === false) {
        checkFlag = flag
      }
    }
    return checkFlag
  }
  // 校验表单的一个字段的第一个报错信息
  function checkRule (dom, rules) {
    let ruleCheckers = {
      required: checkEmpty,
      reg: checkReg
    }
    for (let rule of rules) {
      let {ruleName, ruleValue, msg} = rule
      let checkResult
      if (typeof ruleValue === 'function') {
        checkResult = ruleValue()
      } else {
        checkResult = ruleCheckers[ruleName]
          ? ruleCheckers[ruleName](ruleValue, dom)
          : ruleCheckers.reg(ruleValue, dom)
      }
  
      if (!checkResult) {
        setError(dom, msg, 'add')
        return false
      }
    }
    setError(dom, '', 'remove')
    return true
  }
  // 表单验证的方法================================================>
  // 检测非空
  function checkEmpty (ruleValue, vaForm, va) {
    return vaForm.value.trim() !== ''
  }
  // 检测正则
  function checkReg (ruleValue, vaForm, va) {
    return ruleValue.test(vaForm.value)
  }
  /**
   * 设置错误的方法
   * @param {*} dom 当前dom元素
   * @param {*} msg 报错信息
   * @param {*} type 是添加报错信息还是移除
   */
  function setError (dom, msg, type) {
    if (dom.parentNode.classList) {
      if (type === 'add') {
        dom.parentNode.classList.add('error_item')
      } else {
        dom.parentNode.classList.remove('error_item')
      }
    }
    dom.nextElementSibling.innerHTML = msg
  }
  let installed = false
  function plugin (Vue, options) {
    if (installed) {
      assert(installed, 'already installed')
      return
    }
    Vue.directive('validator', {
      bind: function (el, binding, vnode) {
        let vm = vnode.context // 基本的校验规则
        let finalRule = [] // 最终的校验规则
        let domSelector = binding.arg === undefined ? el.getAttribute('id') : binding.arg
        let options = binding.value ? binding.value : []// 特殊配置（允许非空，编辑新增共用等）
        assert(domSelector, 'not set id or binding.arg')
        let va = createVa(vm, domSelector)// 单例模式创建va，绑定在vm上
        va.ruleListRank.push(domSelector)// 表单检验的顺序
        for (let option of options) {
          if (typeof option === 'object') {
            // 用户自定义的校验规则
            let ruleName = Object.keys(option)[0]
            let ruleValue = option[ruleName] ? option[ruleName] : regList[ruleName]
            assert(ruleValue, domSelector + " selector's " + ruleName + ' not set verification mode')
            finalRule.push(new Rule(ruleName, ruleValue, option.msg))
          } else {
            // 配置项定义的校验规则
            if (regList[option]) {
              finalRule.push(new Rule(option, regList[option], msgList[option]))
            }
          }
        }
        let vaForm = new VaForm(el, finalRule)
        va.forms[domSelector] = vaForm
      }
    })
    installed = true
  }
  // 自动注册vue
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
  export default {
    install: plugin
  }