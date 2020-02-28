
export default function init () {
    let wrapEl = document.querySelector('.canvas-wrp')
    // let clientW = wrapEl.clientWidth
    // let clientH = wrapEl.clientHeight
    let el = document.createElement('canvas')
    el.width = 300
    el.height = 300
    // el.style.backgroundColor = 'rgba(0, 0, 0, .4)'
    wrapEl.append(el)
    let ctx = el.getContext('2d')

    var sun = new Image()
    var moon = new Image()
    var earth = new Image()

    let draw = () => {
        ctx.globalCompositeOperation = 'destination-over'
        ctx.clearRect(0, 0, 300, 300)

        ctx.fillStyle = 'rgba(0, 0, 0, .4)'
        ctx.strokeStyle = 'rgba(0, 153, 255, .4)'
        ctx.save()
        ctx.translate(150, 150)

        // earth
        var time = new Date()
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
        ctx.translate(105, 0)
        ctx.fillRect(0, -12, 50, 24) // shadow
        ctx.drawImage(earth, -12, -12)

        // moon
        ctx.save()
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds())
        ctx.translate(0, 28.5)
        ctx.drawImage(moon, -3.5, -3.5)
        ctx.restore()

        ctx.restore()

        ctx.beginPath()
        ctx.arc(150, 150, 105, 0, Math.PI * 2, false) // earth orbit
        ctx.stroke()

        ctx.drawImage(sun, 0, 0, 300, 300)

        window.requestAnimationFrame(draw)


    }
    let initSystem = () => {
        sun.src = '.././../../assets/images/Canvas_sun.png'
        moon.src = '.././../../assets/images/Canvas_moon.png'
        earth.src = '.././../../assets/images/Canvas_earth.png'
        window.requestAnimationFrame(draw)
    }
    initSystem()
    
}



