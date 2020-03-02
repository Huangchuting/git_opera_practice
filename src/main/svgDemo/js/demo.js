export function round () {
    let circle = document.querySelector('.progress-ring__circle')
    let radius= circle.r.baseVal.value
    let circumference = radius * 2 * Math.PI

    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset= circumference

    let input = document.querySelector('#changeNumber')
    let setProgress = percent => {
        let offset = circumference - percent / 100 * circumference
        circle.style.strokeDashoffset = offset
    }
    
    setProgress(input.value)

    input.addEventListener('change', (e) => {
        setProgress(input.value)
    })
}