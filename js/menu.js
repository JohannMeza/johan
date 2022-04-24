const $menuBtn = document.getElementById('menu-despegable');
const $body = document.documentElement.querySelector('body');
const $nav = document.getElementById('nav');
let screenWidth = window.innerWidth
let minWidth = 850;

function navActive () {
  $body.classList.toggle('nav-active-scroll')
  $nav.classList.toggle('nav-active')
}

$menuBtn.addEventListener("click", navActive)

document.addEventListener("click", e => {
  if (screenWidth < minWidth) {
    if (e.target.matches('.toggle-nav, .toggle-nav *'))
      navActive()
  }
})

window.addEventListener("resize", () => screenWidth = window.innerWidth)