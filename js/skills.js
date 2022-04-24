document.addEventListener("click", e => {
  if (e.target.matches('.skills__buttons__button, .skills__buttons__button *')) {
    const shillActive = document.querySelector(".skills__content__techs:not(.none)");
    const btnByClick = e.target.closest('.skills__buttons__button');
    const btnActive = document.querySelector('.skills__buttons__button.btn-third')

    const skillByActive = document.getElementById(`#${btnByClick.id}`);

    shillActive.classList.add('none');
    skillByActive.classList.remove('none');

    btnByClick.classList.add('btn-third')
    btnActive.classList.remove('btn-third')
  }
})