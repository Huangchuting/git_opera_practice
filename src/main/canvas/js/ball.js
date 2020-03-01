let log = console.log.bind(console)
export default function init () {
    let wrapEl = document.querySelector('.canvas-wrp')
    // let clientW = wrapEl.clientWidth
    // let clientH = wrapEl.clientHeight
    let el = document.createElement('canvas')
    el.width = 600
    el.height = 300
    el.style.border = '1px solid #000'
    // el.style.backgroundColor = 'rgba(0, 0, 0, .1)'
    wrapEl.append(el)
    let ctx = el.getContext('2d')

    let raf

    var ball = {
        x: 100,
        y: 100,
        vx: 5,
        vy: 2,
        radius: 25,
        color: 'lightblue',
        draw: function () {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.fillStyle = this.color
            ctx.fill()
        }
    }
    let draw = () => {
        // log(this)
        ctx.clearRect(0, 0, el.width, el.height)
        ball.draw()
        //处理边界
        if (ball.x + ball.radius > el.width || ball.x - ball.radius < 0) {
            ball.vx = - ball.vx
        }
        if (ball.y + ball.radius > el.height || ball.y - ball.radius < 0) {
            ball.vy = - ball.vy
        }
        if (ball.y + ball.radius > el.height) {
            ball.vy *= .5
        }
        ball.x += ball.vx
        ball.y += ball.vy
        raf = window.requestAnimationFrame(draw)
    }

    el.addEventListener('mouseover', (e) => {
        // log('e', e) // 箭头函数 this为undefined function也是undefined
        raf = window.requestAnimationFrame(draw)
    })
    el.addEventListener('mouseout', (e) => {
        window.cancelAnimationFrame(raf)
    })
    ball.draw()
}