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

    var img = new Image();
    img.src = '../../../assets/images/cqyJiYlRwnTeHmj.jpg'
    // todo demo1
    // let color = document.createElement('div')
    // color.setAttribute('id', 'color')
    // wrapEl.append(color)

    // 

    // img.onload = function() {
    //     ctx.drawImage(img, 0, 0);
    //     img.style.display = 'none';
    // };
    // let pick = (event) => {
    //     var x = event.layerX;
    //     var y = event.layerY;
    //     var pixel = ctx.getImageData(x, y, 1, 1);
    //     var data = pixel.data;
    //     log(data)
    //     var rgba = 'rgba(' + data[0] + ',' + data[1] +
    //                 ',' + data[2] + ',' + (data[3] / 255) + ')';
    //     color.style.background =  rgba;
    //     color.textContent = rgba;
    // }
    // el.addEventListener('mousemove', pick);

    //todo demo2
    // let draw = () => {
    //     ctx.drawImage(img, 0, 0)
    //     img.style.display = 'none'
    //     var imageData = ctx.getImageData(0, 0, el.width, el.height)
    //     var data = imageData.data
    //     var invert = () => {
    //         for (let i = 0; i < data.length; i += 4) {
    //             data[i] = 255 - data[i]
    //             data[i + 1] = 255 - data[i + 1]
    //             data[i + 2] = 255 - data[i + 2]
    //         }
    //         ctx.putImageData(imageData, 0, 0)

    //     }
    //     var grayscale = () => {
    //         for (let i = 0; i < data.length; i += 4) {
    //             var avg = (data[i] + data[i + 1] + data[i + 2]) / 3
    //             data[i] = avg
    //             data[i + 1] = avg
    //             data[i + 2] = avg
    //         }
    //         ctx.putImageData(imageData, 0, 0)
    //     }
    //     var invertbtn = document.createElement('button')
    //     invertbtn.textContent = 'invert'
    //     wrapEl.append(invertbtn)
    //     invertbtn.addEventListener('click', invert)
    //     var grayscaletbtn = document.createElement('button')
    //     grayscaletbtn.textContent = 'grayscale'
    //     wrapEl.append(grayscaletbtn)
    //     grayscaletbtn.addEventListener('click', grayscale)
    // }
    // img.onload = () => {
    //     draw()
    // }

    // todo demo3
    // let draw = () => {
    //     ctx.drawImage(img, 0, 0)
    //     img.style.display = 'none'
    //     var zoomEl = document.createElement('canvas')
    //     zoomEl.width = 100
    //     zoomEl.height = 100
    //     zoomEl.style.marginLeft = '20px'
    //     var zoomctx = zoomEl.getContext('2d')
    //     wrapEl.append(zoomEl)


    //     var smoothbtn = document.createElement('input')
    //     smoothbtn.setAttribute('type', 'checkbox')
    //     wrapEl.append(smoothbtn)
    //     var toggleSmoothing = (e) => {
    //         log(smoothbtn.checked)
    //         zoomctx.imageSmoothingEnabled = smoothbtn.checked
    //     }
    //     smoothbtn.addEventListener('change', toggleSmoothing)

    //     var zoom = (e) => {
    //         var x = e.layerX
    //         var y = e.layerY

    //         zoomctx.drawImage(el, Math.abs(x - 5), Math.abs(y - 5), 10, 10, 0, 0, 200, 200)
    //     }
    //     el.addEventListener('mousemove', zoom)
    // }
    // img.onload = () => {
    //     draw(this)
    // }

    // todo demo4
    ctx.beginPath()
    ctx.arc(70, 80, 10, 0, 2 * Math.PI, false)
    ctx.fill()
    el.addEventListener('mousemove', function (e) {
        log(e)
        if (e.region) {
            log('hit region' + e.region)
        }
    })
}