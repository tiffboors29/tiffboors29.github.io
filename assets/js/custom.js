$(document).ready(function(){

	'use strict';

  // event handling
	$(window).on('scroll', scrollToTop);

  $('.header-area').sticky({ topSpacing: 0 });

  $('.return-to-top').on('click', returnToTop);

  $('.about-btn button').bind('click', scroll);
  $('li.smooth-menu a').bind('click', scroll);

  $('body').scrollspy({ target:'.navbar-collapse', offset: 0 });

  // animation
  $(window).load(function(){
    $('.home-txt h2').removeClass('animated fadeInUp').css({'opacity': '0'});
    $('.home-txt h3').removeClass('animated fadeInUp').css({'opacity': '0'});
    $('.home-txt button').removeClass('animated fadeInDown').css({'opacity': '0'});
  });

  $(window).load(function(){
    $('.home-txt h2').addClass('animated fadeInUp').css({'opacity': '0'});
    $('.home-txt h3').addClass('animated fadeInUp').css({'opacity': '0'});
    $('.home-txt button').addClass('animated fadeInDown').css({'opacity': '0'});
  });

  function scrollToTop(event) {
    if ($(this).scrollTop() > 600) {
      $('.return-to-top').fadeIn();
    } else {
      $('.return-to-top').fadeOut();
    }
  }

  function returnToTop(event) {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  }

  function scroll(event) {
    event.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - -1
    }, 1200,'easeInOutExpo');
  }

});	

	