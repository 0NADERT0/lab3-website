function firstButton() {
    let elem = document.getElementById('img1')
    let style = getComputedStyle(elem)
    if (style.display == 'none') {
        document.getElementById('img1').style.display='block'
    }
    else {
        document.getElementById('img1').style.display='none'
    }
}

function secondButton() {
    let elem = document.getElementById('img2')
    let style = getComputedStyle(elem)
    if (style.display == 'none') {
        document.getElementById('img2').style.display='block'
    }
    else {
        document.getElementById('img2').style.display='none'
    }
}
