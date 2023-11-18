const lis = document.querySelectorAll('#content>li')
const picBtns = document.querySelectorAll('#picBtn>li')
picBtns.forEach((picBtn,index) => {
    picBtn.addEventListener('mouseenter', () => {
        picBtns.forEach(picBtn => {
            picBtn.style.border = '1px solid #eee'
        })
        picBtn.style.border = '1px solid #153d61'
        lis.forEach(li => {
            li.style.opacity = 0
        })
        lis[index].style.opacity = 1
    })
})