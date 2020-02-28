export default function init () {
    let wrapEl = document.querySelector('.canvas-wrp')
    // let clientW = wrapEl.clientWidth
    // let clientH = wrapEl.clientHeight
    let el = document.createElement('canvas')
    el.style.display = 'block'
    el.width = 1024
    el.height = 198
    el.style.backgroundColor = 'rgba(0, 0, 0, .8)'
    wrapEl.append(el)
    let ctx = el.getContext('2d')

    var img = new Image()

    img.src = '../../../assets/images/Capitan_Meadows,_Yosemite_National_Park.jpg'

    var xSize = 800
    var ySize = 200
    var speed = 30
    var scale = 1.05
    var y = -4.5

    var dx = .75
    var imgW, imgH
    var x = 0
    var clearX, clearY
    
    let draw = () => {
        ctx.clearRect(0, 0, clearX, clearY)
        if (imgW <= xSize) {
            if (x > xSize) x = 0
            if(x > xSize - imgW) ctx.drawImage(img, x - xSize + 1, y, imgW, imgH)
        } else {
            if (x > xSize) x = xSize - imgW
            if (x > xSize - imgW) ctx.drawImage(img, x - xSize + 1, y, imgW, imgH)
        }
        ctx.drawImage(img, x, y, imgW, imgH)
        x += dx
    }

    img.onload = () => {
        imgW = img.width * scale
        imgH = img.height * scale
        if (imgW > xSize) {
            x = xSize - imgW
            clearX = imgW
        } else {
            clearX = xSize
        }
        if (imgH > ySize) {
            clearY = imgH
        } else {
            clearY = ySize
        }

        return setInterval(draw, speed)
    }
}