
import StarSky from './starSky'
export default function init (w = 800, h = 800) {
    let wrapEl = document.querySelector('.canvas-wrp')
    // let clientW = wrapEl.clientWidth
    // let clientH = wrapEl.clientHeight
    let el = document.createElement('canvas')
    el.width = w
    el.height = h
    el.style.backgroundColor = 'rgba(0, 0, 0, 1)'
    wrapEl.append(el)
    let ctx = el.getContext('2d')
    StarSky(ctx, w, h)

}