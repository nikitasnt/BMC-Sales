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



  // таймер
  function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
      return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);


        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }

    function display(days, hours, minutes, seconds) {}
  }

  countdown('05/10/2020 02:00:00 AM');



  // свайпер секции services
  var mySwiperServices = new Swiper('.services__swiper-container', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: ".services__swiper-button-next",
      prevEl: ".services__swiper-button-prev"
    }
  });
});