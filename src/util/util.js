export let uuid = function() {
    function s4 () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4())
}

export let random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}