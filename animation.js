'use strict'; 

$(function(){
  $(window).scroll(function () {
     if ($(this).scrollTop() > 20) {
          $('#page-top').addClass('scroll'); 
     } else {
          $('#page-top').removeClass('scroll'); 
     }
  });
});

/*
$('#page-top').click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
*/