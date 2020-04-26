$(document).ready(function () {
  // свайпер секции hero
  var mySwiperHero = new Swiper ('.hero__swiper-container', {

  });
  // переключения по этому слайдеру
  $('.hero__slide-next').on('click', function() {
    $('.hero__slide-next').removeClass('hero__slide_active');
    $('.hero__slide-prev').addClass('hero__slide_active');
    mySwiperHero.slideNext();
  });
  $('.hero__slide-prev').on('click', function() {
    $('.hero__slide-prev').removeClass('hero__slide_active');
    $('.hero__slide-next').addClass('hero__slide_active');
    mySwiperHero.slidePrev();
  });



  // бургер
  $('.header__burger').on('click', function() {
    $('.header__burger').toggleClass('header__burger_active');
    $('.nav').toggleClass('nav_active');
  });



  // спойлер
  $('.categories__button').on('click', function() {
    $('.categories__hidden').slideToggle(600);
    $(this).toggleClass('categories__button_active');
  });
});