var Event = (function () {
    debugger
    var global = this,
        Event,
        _default = 'default';
    
    Event = function () {
        var _listen,
            _trigger,
            _remove,
            _slice = Array.prototype.slice,
            _shift = Array.prototype.shift,
            _unshift = Array.prototype.unshift,
            namespaceCache = {},
            _create,
            find,
            each = function (ary, fn) {
                debugger
                var ret;
                for (let i = 0, l = ary.length; i < l; i++) { 
                    var n = ary[i];
                    ret = fn.call(n, i, n)
                    console.log(ret)
                }
                return ret;
            }

            _listen = function (key, fn, cache) {
                debugger
                if (!cache[key]) {
                    cache[key] = []
                }
                cache[key].push(fn)
            }

            _remove = function (key, cache, fn) {
                debugger
                if (cache[key]) {
                    if (fn) {
                        for (let i = cache[key].length; i >= 0; i--) {
                            if (cache[key][i] === fn) {
                                cache[key].splice(i, 1)
                            }
                        }
                    } else {
                        cache[key] = []
                    }
                }
            }

            _trigger = function () {
                debugger
                var cache = _shift.call(arguments),
                    key = _shift.call(arguments),
                    args = arguments,
                    _self = this,
                    ret,
                    stack = cache[key]

                if (!stack || !stack.length) {
                    return
                }
                return each(stack, function () {
                    return this.apply(_self, args)
                })
            }

            _create = function (namespace) {
                debugger
                var namespace = namespace || _default
                var cache = {},
                    offlineStack = [],
                    ret = {
                        listen:function (key, fn, last) {
                            debugger
                            _listen(key, fn, cache);
                            if (offlineStack === null) { 
                                return
                            }
                            if (last === 'last') {
                                offlineStack.length && offlineStack.pop()()
                            } else {
                                each(offlineStack, function () {
                                    console.log('this, ')
                                    console.log(this())
                                })
                            }
                            offlineStack = null
                        },
                        one: function (key, fn, last) {
                            debugger
                            _remove(key, cache);
                            this.listen(key, fn, last)
                        },
                        remove: function (key, fn) {
                            debugger
                            _remove(key, cache, fn)
                        },
                        trigger: function () {
                            debugger
                            var fn,
                                args,
                                _self = this;
                            
                            _unshift.call(arguments, cache);
                            args = arguments;
                            fn = function () {
                                debugger
                                return _trigger.apply(_self, args)
                            }
                            if (offlineStack) {
                                return offlineStack.push(fn)
                            }
                            return fn()
                        }
                    }
                    return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret) : ret
            }
            return {
                create: _create,
                one: function (key, fn, last) {
                    debugger
                    var event = this.create();
                    event.one(key, fn, last);
                },
                remove: function (key, fn) {
                    debugger
                    var event = this.create()
                    event.remove(key, fn);
                },
                listen: function (key, fn, last) {
                    debugger
                    var event = this.create()
                    event.listen(key, fn, last)
                },
                trigger: function () {
                    debugger
                    var event = this.create()
                    event.trigger.apply(this, arguments)
                }
            }
    }()
    return Event
})()

// console.log(Event.trigger('click', 1))
// console.log(Event.listen('click', function (a) {
//     console.log('click1: ' + a)
// }))

Event.create('namespace1').listen('click', function (a) {
    console.log('click2: ' + a)
})
Event.create('namespace1').trigger('click', 2)

// Event.create('namespace2').listen('click', function (a) {
//     console.log('click3: ' + a)
// })

// Event.create('namespace2').trigger('click', 3)