window.onload =function () {
    scrollLoad()
}

window.addEventListener('scroll', scrollLoad)

function scrollLoad() {
    const boxList = document.querySelectorAll('.box')

    const targetValue = window.innerHeight * 0.8 

    boxList.forEach(function (box) {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop <= targetValue) {
            box.classList.add('show-center')
        } else {
            box.classList.remove('show-center')
        }
    })
}

// const pop = document.getElementById('pop')
// pop.onclick = function () {
//     document.querySelector("individual").scrollIntoView(true);
// }



