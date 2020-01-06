import Vue from 'vue';
import Verify from '../util/verify'
 
// v-dialogDrag: 弹窗拖拽属性
Vue.directive('dialogDrag', {
    bind(el, binding, vnode, oldVnode) {
        const dialogHeaderEl = el.querySelector('.el-dialog__header');
        const dragDom = el.querySelector('.el-dialog');
        //dialogHeaderEl.style.cursor = 'move';
        dialogHeaderEl.style.cssText += ';cursor:move;'
        dragDom.style.cssText += ';top:0px;'
 
        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty = (function() {
                if (window.document.currentStyle) {
                        return (dom, attr) => dom.currentStyle[attr];
                } else{
                        return (dom, attr) => getComputedStyle(dom, false)[attr];
                }
        })()       
        
        dialogHeaderEl.onmousedown = (e) => {
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - dialogHeaderEl.offsetLeft;
            const disY = e.clientY - dialogHeaderEl.offsetTop;
            
            const screenWidth = document.body.clientWidth; // body当前宽度
                const screenHeight = document.documentElement.clientHeight; // 可见区域高度(应为body高度，可某些环境下无法获取) 
                
                const dragDomWidth = dragDom.offsetWidth; // 对话框宽度
                const dragDomheight = dragDom.offsetHeight; // 对话框高度
                
                const minDragDomLeft = dragDom.offsetLeft;
                const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
                
                const minDragDomTop = dragDom.offsetTop;
                const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight;
 
            
            // 获取到的值带px 正则匹配替换
            let styL = sty(dragDom, 'left');
            let styT = sty(dragDom, 'top');
 
            // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
            if(styL.includes('%')) {
                styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100);
                console.log('includes', styL)
                styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100);
            }else {
                styL = +styL.replace(/\px/g, '');
                console.log('not includes', styL)
                styT = +styT.replace(/\px/g, '');
            };
            
            document.onmousemove = function (e) {
                // 通过事件委托，计算移动的距离 
                                let left = e.clientX - disX;
                                let top = e.clientY - disY;
                                
                                // 边界处理
                                if (-(left) > minDragDomLeft) {
                                        left = -(minDragDomLeft);
                                } else if (left > maxDragDomLeft) {
                                        left = maxDragDomLeft;
                                }
                                
                                if (-(top) > minDragDomTop) {
                                        top = -(minDragDomTop);
                                } else if (top > maxDragDomTop) {
                                        top = maxDragDomTop;
                                }
 
                // 移动当前元素  
                                dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
            };
 
            document.onmouseup = function (e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }  
    }
})

Vue.directive('verify', {
    inserted (el, binding, vnode) {
        let inputEle = el.querySelector('input') ? el.querySelector('input') : el
        let rules = binding.value
        let handler = (e) => {
            for (let i = 0, rule; rule = rules[i++];) {
                var strategyArr = rule.strategy.split(':')
                var strategy = strategyArr.shift()
                strategyArr.unshift(e.target.value)
                var errorMsg = rule.msg
                strategyArr.push(errorMsg)
                let error = Verify[strategy].apply(e, strategyArr)
                if (error) {
                    if (el.className.indexOf('is-error') !== -1) {
                        return
                    }
                    el.insertAdjacentHTML('beforeend', `<span class="error-text">${error}</span>`) 
                    el.className = el.className + ' is-error'
                    return
                } else {
                    if (el.className.indexOf('is-error') !== -1) {
                        if (el.querySelector('.error-text')) {
                            let errorHtml = el.querySelector('.error-text')
                            el.removeChild(errorHtml)
                        }
                        el.className = el.className.replace('is-error', '').trim()
                    }
                }
            }
        }

        inputEle.addEventListener('keyup', handler)
        inputEle.addEventListener('blur', handler)
    }
})
Vue.directive('verifySubmit', {
    inserted (el, binding, vnode) {
        el.addEventListener('click', (e) => {
            let elements = document.getElementsByClassName('v-check')
            console.log(elements)
            let errorInputs = document.getElementsByClassName('is-error')
            console.log(errorInputs)
            if(errorInputs.length === 0){
                
                // vnode.context.submit();
            }
        })
    }
})

Vue.directive('focus', { // 自动获取焦点
    bind: (el, binding) => {
      let defClass = 'el-input'
      let defTag = 'input'
      let value = binding.value || true
      if (typeof value === 'boolean') {
          console.log('dddfdf')
        value = {cls: defClass, tag: defTag, foc: value}
      } else {
        value = {
          cls: value.cls || defClass,
          tag: value.tag || defTag,
          foc: value.foc || false
        }
      }
      console.log(el.classList.contains(value.cls))
      if (el.classList.contains(value.cls) && value.foc) {
        setTimeout(() => {el.getElementsByTagName(value.tag)[0].focus() }, 0)
      }
    }
  })

Vue.directive('tableScrollTo', {
    bind (el, binding) {
        const selectWrp = el.querySelector('.el-table__body-wrapper')
        if (binding.value.type) {
            selectWrp.addEventListener('scroll', () => {
                window.sessionStorage.setItem('scrollTop' + binding.value.type, this.scrollTop)
            })
        }
    },
    componentUpdated (el, binding) {
        const selectWrp = el.querySelector('.el-table__body-wrapper')
        let t = window.sessionStorage.getItem('scrollTop' + binding.value.type) || 0
        if (binding.value.type) {
            let timer = setTimeout(() => {
                $(selectWrp).animate({
                    scrollTop: t
                }, 'fast')
                // chrome 53版本不支持以下方法
                // selectWrp.scrollTo({
                //     top: t,
                //     behavior: 'smooth'
                // })

                clearTimeout(timer)
            }, 0)
        }
    }
})
/*
v-tableScrollTo = "{type: 'sss', uuid: 'refresh'}"
*/