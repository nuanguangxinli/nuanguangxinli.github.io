window.addEventListener("scroll", this.scrolling)
const targetTop = document.getElementById("detail").offsetTop
const navBox = document.getElementById("navbox")

function scrolling() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop > targetTop) {
        navBox.classList.add("navboxFixed")
    } else {
        navBox.classList.remove("navboxFixed")
    }
}

let a = window.location.search.split('=')

let therapist = {}
for (let index = 0; index < 15; index++) {
    if (Number(a[1]) === index) {
        therapist = therapists[Number(a[1]) - 1]
    }
}
const banner = document.getElementById("banner")
const rightInner = document.querySelector(".right-inner")
const descriptInner = document.querySelector(".descript-inner")
const tabItems = document.querySelector(".tab-items")

function insertData() {
    for (let i = 0; i < therapist.detail.pics.length; i++) {
        banner.childNodes[1].insertAdjacentHTML("beforeend", "<li><img src='"+therapist.detail.pics[i]+"'></li>")
        banner.childNodes[3].insertAdjacentHTML("beforeend", "<li><img src='"+therapist.detail.pics[i]+"'></li>")
    }
    rightInner.childNodes[1].innerText = therapist.name
    rightInner.childNodes[3].childNodes[3].innerText = therapist.experience
    rightInner.childNodes[5].childNodes[3].innerText = therapist.mode.join('/')
    rightInner.childNodes[7].childNodes[3].innerText = therapist.pricedetail
    rightInner.childNodes[9].childNodes[3].innerText = therapist.city
    descriptInner.childNodes[3].innerText = therapist.detail.sentence
    tabItems.childNodes[3].innerText = therapist.detail.intro.join('\r\n')
    tabItems.childNodes[7].innerText = therapist.detail.field.join('\r\n')
    tabItems.childNodes[13].innerText = therapist.detail.education.join('\r\n')
    // tabItems.childNodes[17].innerText = therapist.detail.works.join('\r\n')
    if (therapist.detail.works[0] === "无") {
        tabItems.childNodes[15].style.position = 'absolute'
        tabItems.childNodes[15].style.opacity = 0
    } else {
        tabItems.childNodes[17].innerText = therapist.detail.works.join('\r\n')
    }
    tabItems.childNodes[21].innerText = therapist.detail.process.join('\r\n')
    if (therapist.detail.interview[0][0] === "无") {
        tabItems.childNodes[23].style.position = 'absolute'
        tabItems.childNodes[23].style.opacity = 0
        console.log(1);
    } else {
        // tabItems.childNodes[17].innerText = therapist.detail.works.join('\r\n')
        for (let i = 0; i < therapist.detail.interview.length; i++) {
            tabItems.childNodes[25].insertAdjacentHTML("beforeend", "<ul><li>"+therapist.detail.interview[i][0]+"</li><li style='white-space: pre-line;'>"+therapist.detail.interview[i][1].join('\r\n')+"</li></ul>")
        }
        console.log(2);
    }
    
}
insertData()
