export const imgToSVG = () => {
  document.querySelectorAll('img.svg').forEach((el) => {
    const imgID = el.getAttribute('id')
    const imgClass = el.getAttribute('class')
    const imgURL = el.getAttribute('src')

    fetch(imgURL)
      .then((data) => data.text())
      .then((response) => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(response, 'text/html')
        let svg = xmlDoc.querySelector('svg')

        if (typeof imgID !== 'undefined') {
          svg.setAttribute('id', imgID)
        }

        if (typeof imgClass !== 'undefined') {
          svg.setAttribute('class', imgClass + ' replaced-svg')
        }

        svg.removeAttribute('xmlns:a')
        if (el.parentNode) {
          el.parentNode.replaceChild(svg, el)
        }
      })
  })
}

// Cursor
export const hibrizyCursor = () => {
  let myCursor = document.querySelectorAll('.mouse-cursor'),
    hamburger = document.querySelector('.hamburger'),
    kura_tm_topbar = document.querySelector('.kura_tm_topbar '),
    pointer = document.querySelector('.cursor-pointer'),
    e = document.querySelector('.cursor-inner'),
    t = document.querySelector('.cursor-outer')

  function mouseEvent(element) {
    element.addEventListener('mouseenter', function () {
      e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
    })
    element.addEventListener('mouseleave', function () {
      e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover')
    })
  }
  if (myCursor.length) {
    if (document.body) {
      let o = !1
      ;(window.onmousemove = function (s) {
        o || (t.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)'),
          (e.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)')
      }),
        document.body.addEventListener(
          'mouseenter',
          function () {
            let a = document.querySelectorAll('a')
            e.classList.add('cursor-inner'), t.classList.add('cursor-outer')

            for (let i = 0; i < a.length; i++) {
              const element = a[i]
              mouseEvent(element)
            }

            hamburger && mouseEvent(hamburger)
            kura_tm_topbar && mouseEvent(kura_tm_topbar)
            pointer && mouseEvent(pointer)
          }
        ),
        (e.style.visibility = 'visible'),
        (t.style.visibility = 'visible')
    }
  }
}

// PreLoader
export const hibrizyPreLoader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ? true
    : false
  let preloader = document.getElementById('preloader')

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add('preloaded')
      }, 800)
      setTimeout(function () {
        preloader.remove()
      }, 2000)
    } else {
      preloader.remove()
    }
  }
}

// Active Section
export const hibrizySectionActive = (value) => {
  const sections = document.querySelectorAll('.hibrizy_tm_section')
  sections.forEach((section) => {
    let id = section.getAttribute('id')
    if (id == value) {
      section.className = 'hibrizy_tm_section active wow animated fadeInUp'
    } else {
      section.className = 'hibrizy_tm_section hidden animated'
    }
  })
}

// Data image
export const dataImage = () => {
  let d = document.querySelectorAll('[data-img-url')
  for (let i = 0; i < d.length; i++) {
    const element = d[i]
    element.style.backgroundImage = `url(${element.getAttribute('data-img-url')})`
  }
}

// hibrizy custom pagination in swiper slider

export const swiperSliderCustomSlider = (current, total, currentCls, totalCls, allCls) => {
  var scale, translateX
  var progressDOM = document.querySelector('.hibrizy_tm_swiper_progress')
  if (progressDOM.classList.contains('fill')) {
    translateX = '0px'
    scale = parseInt((current / total) * 100) / 100
  } else {
    scale = parseInt((1 / total) * 100) / 100
    translateX = ((current - 1) * parseInt((100 / total) * 100)) / 100 + 'px'
  }
  document.querySelector(
    `.${allCls ? allCls : 'all'} span`
  ).style.transform = `translate3d(${translateX},0px,0px) scaleX(${scale}) scaleY(1)`

  if (current < 10) {
    current = '0' + current
  }
  if (total < 10) {
    total = '0' + total
  }
  document.querySelector(`.${currentCls ? currentCls : 'current'}`).innerHTML = current
  document.querySelector(`.${totalCls ? totalCls : 'total'}`).innerHTML = total
}
