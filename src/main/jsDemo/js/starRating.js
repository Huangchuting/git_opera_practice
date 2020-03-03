let log = console.log.bind(console)
// export default function starRating () {
//     var rating = (function () {
//         var lightOn = function ($item, num) {
//             $item.each(function(index) {
//                 if (index < num) {
//                     $(this).css('background-position', '-1px -40px')
//                 } else {
//                     $(this).css('background-position', '0 0')
//                 }
//             })
//         }
//         var init = function (el, num) {
//             var $rating = $(el)
//             var $item = $rating.find('.rating-item')
            

//             lightOn($item, num)

//             $rating.on('mouseover', '.rating-item', function () {
//                 lightOn($item, $(this).index() + 1)
//             }).on('click', '.rating-item', function () {
//                 num = $(this).index() + 1
//             }).on('mouseout', function () {
//                 lightOn($item, num)
//             })
//         }
//         $.fn.extend({
//             rating: function (num) {
//                 return this.each(function() {
//                     init(this, num)
//                 })
//             }
//         })

//         // return {
//         //     init: init
//         // }
//     })()
//     $('#rating').rating(2)
//     $('#rating2').rating(4)
// }

//模板方法
// export default function starRating () {
//     var rating = (function () {
//         // 默认参数
//         var defaults = {
//             mode: 'LightEntire',
//             num: 0,
//             readOnly: true,
//             select: function () {},
//             chosen: function () {}
//         }
        
//         // 点亮整颗
//         var LightEntire = function (el, options) {
//             this.$el= $(el)
//             this.$item = this.$el.find('.rating-item')
//             this.opts = options
//         }
//         LightEntire.prototype.init = function () {
//             this.lightOn(this.opts.num)
//             if (this.opts.readOnly) {
//                 this.bindEvent()
//             }
            
//         }
//         LightEntire.prototype.lightOn = function (num) {
//             num = parseInt(num)
//             this.$item.each(function(index) {
//                 if (index < num) {
//                     $(this).css('background-position', '-1px -40px')
//                 } else {
//                     $(this).css('background-position', '0 0')
//                 }
//             })
//         }
//         LightEntire.prototype.bindEvent = function () {
//             var self = this
//             var itemLen = self.$item.length
//             self.$el.on('mouseover', '.rating-item', function () {
//                 var num = $(this).index() + 1
//                 self.lightOn(num);
//                 (typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemLen);

//                 self.$el.trigger('select', [num, itemLen])

//             }).on('click', '.rating-item', function () {
//                 var num = $(this).index() + 1
//                 self.opts.num = num;
//                 (typeof self.opts.chosen === 'function') && self.opts.chosen.call(this, num, itemLen);

//                 self.$el.trigger('chosen', [num, itemLen])
//             }).on('mouseout', function () {
//                 self.lightOn(self.opts.num)
//             })
//         }
//         // 点亮半颗
//         var LightHalf = function (el, options) {
//             this.$el= $(el)
//             this.$item = this.$el.find('.rating-item')
//             this.opts = options
//             this.add = 1
//         }
//         LightHalf.prototype.init = function () {
//             this.lightOn(this.opts.num)
//             if (this.opts.readOnly) {
//                 this.bindEvent()
//             }
            
//         }
//         LightHalf.prototype.lightOn = function (num) {
//             var count = parseInt(num)
//             var isHalf = count !== num
            
//             this.$item.each(function(index) {
//                 if (index < count) {
//                     $(this).css('background-position', '-1px -40px')
//                 } else {
//                     $(this).css('background-position', '0 0')
//                 }
//             })
//             if (isHalf) {
//                 this.$item.eq(count).css('background-position', '0px -80px')
//             }
//         }
//         LightHalf.prototype.bindEvent = function () {
//             var self = this
//             var itemLen = self.$item.length
//             self.$el.on('mousemove', '.rating-item', function (e) {
//                 log('sss')
//                 var num = 0
//                 if (e.pageX - $(this).offset().left < $(this).width() / 2) {
//                     self.add = .5
//                 } else {
//                     self.add = 1
//                 }
//                 num = $(this).index() + self.add
//                 self.lightOn(num);
//                 (typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemLen);

//                 self.$el.trigger('select', [num, itemLen])

//             }).on('click', '.rating-item', function () {
//                 var num = $(this).index() + self.add
//                 self.opts.num = num;
//                 (typeof self.opts.chosen === 'function') && self.opts.chosen.call(this, num, itemLen);

//                 self.$el.trigger('chosen', [num, itemLen])
//             }).on('mouseout', function () {
//                 self.lightOn(self.opts.num)
//             })
//         }
//         var mode = {
//             'LightEntire': LightEntire,
//             'LightHalf': LightHalf
//         }
//         var init = function (el, options) {
//             options = $.extend({}, defaults, options)
//             // new LightEntire(el, options).init()
//             // new LightHalf(el, options).init()
//             if (!mode[options.mode]) {
//                 options.mode = 'LightEntire'
//             }
//             new mode[options.mode](el, options).init()
//         }

//         return {init: init}
//     })()
//     rating.init('#rating', {
//         mode: 'LightHalf',
//         num: 2.5
//     })
//     $('#rating').on('select', function (el, num, total) {
//         log(`${num} / ${total}`)
//     }).on('chosen', function (el, num, total) {
//         log(`${num} / ${total}`)
//     })
// }


// 抽取父类
export default function starRating () {
    var rating = (function () {
        // 默认参数
        var defaults = {
            mode: 'LightEntire',
            num: 0,
            readOnly: true,
            select: function () {},
            chosen: function () {}
        }
        // 继承
        var extend = function (subClass, superClass) {
            var F = function () {}
            F.prototype = superClass.prototype
            subClass.prototype = new F()
            subClass.prototype.constructor = subClass
        }
        var Light = function (el, options) {
            this.$el= $(el)
            this.$item = this.$el.find('.rating-item')
            this.opts = options
            this.add = 1
            this.selectEvent = 'mouseover'
        }
        Light.prototype.init = function () {
            this.lightOn(this.opts.num)
            if (this.opts.readOnly) {
                this.bindEvent()
            }
            
        }
        Light.prototype.lightOn = function (num) {
            num = parseInt(num)
            this.$item.each(function(index) {
                if (index < num) {
                    $(this).css('background-position', '-1px -40px')
                } else {
                    $(this).css('background-position', '0 0')
                }
            })
        }
        Light.prototype.bindEvent = function () {
            var self = this
            var itemLen = self.$item.length
            self.$el.on(self.selectEvent, '.rating-item', function (e) {
                var num = 0
                self.select(e, $(this))
                var num = $(this).index() + self.add
                self.lightOn(num);
                (typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemLen);

                self.$el.trigger('select', [num, itemLen])

            }).on('click', '.rating-item', function () {
                var num = $(this).index() + self.add
                self.opts.num = num;
                (typeof self.opts.chosen === 'function') && self.opts.chosen.call(this, num, itemLen);
                self.$el.trigger('chosen', [num, itemLen])
            }).on('mouseout', function () {
                self.lightOn(self.opts.num)
            })
        }
        Light.prototype.select = function () {
            throw new Error('子类必须重写此方法')
        }
        Light.prototype.unbindEvent = function () {
            this.$el.off()
        }
        // 点亮整颗
        var LightEntire = function (el, options) {
            Light.call(this, el, options)
            this.selectEvent = 'mouseover'
        }
        extend(LightEntire, Light)
        LightEntire.prototype.lightOn = function (num) {
            Light.prototype.lightOn.call(this, num)
        }
        LightEntire.prototype.select = function () {
            self.add = 1
        }
        // 点亮半颗
        var LightHalf = function (el, options) {
            Light.call(this, el, options)
            this.selectEvent = 'mousemove'
        }
        extend(LightHalf, Light)
        LightHalf.prototype.lightOn = function (num) {
            var count = parseInt(num)
            var isHalf = count !== num
            
            Light.prototype.lightOn.call(this, count)
            if (isHalf) {
                this.$item.eq(count).css('background-position', '0px -80px')
            }
        }
        LightHalf.prototype.select = function (e, $this) {
            if (e.pageX - $this.offset().left < $this.width() / 2) {
                this.add = .5
            } else {
                this.add = 1
            }
            
        }
        var mode = {
            'LightEntire': LightEntire,
            'LightHalf': LightHalf
        }
        var init = function (el, option) {
            
            var $el = $(el)
            var rating = $el.data('rating')
            var options = $.extend({}, defaults, typeof option === 'object' &&  option)
            if (!mode[options.mode]) {
                options.mode = 'LightEntire'
            }
            if (!rating) {
                $el.data('rating', (rating = new mode[options.mode](el, options)))
                rating.init()
            }
            if (typeof option === 'string') {
                rating[option]()
            }
            
        }
        // 插件
        $.fn.extend({
            rating: function (option) {
                return this.each(function () {
                    init(this, option)
                })
            }
        })
        return {init: init}
    })()
    // rating.init('#rating', {
    //     mode: 'dfd',
    //     num: 2.5,
    //     chosen: function () {
    //         rating.init('#rating','unbindEvent')
    //         log('8888')
    //     }
    // })

    $('#rating').rating({
        mode: 'LightEntire',
        num: 5,
        chosen: function () {
            $('#rating').rating('unbindEvent')
        }
    })
    $('#rating2').rating({
        mode: 'LightHalf',
        num: 3.5
    })
}