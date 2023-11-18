let datas = structuredClone(therapists)
let newTherapists = []
function appendItem(item) {
    return "<li class='therapist-item'><a href='./profile.html?key="+item.key+"' class='avatar' style='background-image: url("+item.avatar+");'></a><ul><li><a href='./profile.html?key="+item.key+"'>"+item.name+"</a><span></span><li class='locafa'><span>咨询方式："+item.mode.join('/')+"</span><span>咨询经验："+item.experience+"</span><span class='loca'>"+(item.city[0]==="海外"?item.city[1]:item.city)+"</span></li></li><li><span>"+item.info+"</span></li><li><span><span style='margin-right: 0;color: #ffa202;'>￥"+item.price+"</span>"+item.pricetime+"</span></li></ul><a href='./profile.html?key="+item.key+"' class='detail'><button>详细信息</button></a></li>"
}

window.onload = function () {
    const opts = document.querySelectorAll('.opt')
    const categorys = document.querySelectorAll('.category')
    const citys = document.querySelectorAll('.city')
    const ways = document.querySelectorAll('.way')
    const genders = document.querySelectorAll('.gender')
    const prices = document.querySelectorAll('.price')
    const therapistList = document.querySelector('.therapist-list')
    function removeActive(elements) {
        elements.forEach(element => {element.classList.remove('active')})
    }

    function showAll() {
        for (let index = 0; index < therapists.length; index++) {
            therapistList.insertAdjacentHTML("beforeend", appendItem(therapists[index]))
        }
    }
    showAll()

    function showNewTherapists() {
        for (let index = 0; index < newTherapists.length; index++) {
            therapistList.insertAdjacentHTML("beforeend", appendItem(newTherapists[index]))
        }
    }

    function compare(property) {
        return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
       }
    }

    function addActive(elements) {
        elements.forEach(element => {
            element.addEventListener('click', () => {
                removeActive(elements)
                element.classList.add('active')
            })
        })
    }

    let selections = [categorys, citys, ways, genders, prices]

    selections.forEach(selection => {
        addActive(selection)
    })

    opts.forEach(opt => {
        opt.addEventListener('click', () => {
            let actives = document.getElementsByClassName('active')
            let search = []
            for (let index = 0; index < actives.length; index++) {
                search.push(actives[index].childNodes[0].innerHTML)
            }
            function isRight(data) {
                if ((search[3] === '全部' || data.gender === search[3]) && (search[1] === '全部城市' || data.city.indexOf(search[1]) !== -1) && (search[2] === '全部' || data.mode.indexOf(search[2]) !== -1) && (search[0] === '全部类别' || data.major.indexOf(search[0]) !== -1 )) {
                    return true
                }
            }
            newTherapists = datas.filter(isRight)
            if (search[4] === '价格从低到高') {
                newTherapists = newTherapists.sort(compare("price"))
            } else if(search[4] === '价格从高到低') {
                newTherapists = newTherapists.sort(compare("price")).reverse()

            } else if(search[4] === '默认排序'){
                newTherapists = newTherapists.sort(compare("key"))
            }
            // console.log(newTherapists);
            therapistList.innerHTML = ""
            showNewTherapists()
        })
    })

}