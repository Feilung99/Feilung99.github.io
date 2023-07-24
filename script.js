
const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  // Default parameters

    speed: 300,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    paginationBulletMessage: 'Переход на слайд {{index}}'
  }

})






document.querySelectorAll('.list-steps__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.list-steps__link').forEach(function(btn){
  btn.classList.remove('list-steps__link--active')});
  e.currentTarget.classList.add('list-steps__link--active');

  document.querySelectorAll('.howwork__blog').forEach(function(tabsBtn){
    tabsBtn.classList.remove('howwork__blog--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('howwork__blog--active');
    });
    });


$(".accordion").accordion({
  heightStyle: "content"
});
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav-link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
})
menuLinks.forEach(function(el){
  el.addEventListener('click', function() {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');

})
})
// let search = document.querySelector('.header__btn-open');

// search.addEventListener('click', function() {
//   search.classList.toggle('search-form--active');
// })
// document.addEventListener('DOMContentLoaded', (e) => {
// document.getElementById('header__btn-open').addEventListener('click', (e) => {
//   document.getElementById('search-form').classList.add('search-form--active')
// })

// document.getElementById('header__btn-close').addEventListener('click', (e) => {
//   document.getElementById('search-form').classList.remove('search-form--acive')
// })

// document.getElementById('search-form').addEventListener('submit', (e) => {
//   e.preventDefault()
// })
// })
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})
