import {random} from '../../../util/util'
export default function star (ctx, w, h) {
    let x = random(0, w)
    let y = random(0, 100)
    let R = random(5, 10)
    let r = R / 2
    let rot = random(0, 360)
    ctx.beginPath()
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * R + x, 
                    -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * R + y)
        ctx.lineTo(Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * r + x, 
                    -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * r + y)
    }
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.fillStyle = 'yellow'
    ctx.fill()
}