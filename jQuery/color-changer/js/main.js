
let aboutOffset = $('#about').offset().top;
let wscroll = $(window).scrollTop();

if (wscroll > aboutOffset - 50) {
  $('nav').removeClass('bg-transparent');
  $('nav').css('backgroundColor', 'rgba(0, 0, 0, 0.6)');
  $('nav').find('.container-fluid').css('padding-left', '5px');
  $('nav').find('.container-fluid').css('padding-right', '5px');
  $('.toUp').fadeIn(500);
}
else {
  $('nav').addClass('bg-transparent'); 
  $('nav').find('.container-fluid').css('padding-left', '100px');
  $('nav').find('.container-fluid').css('padding-right', '100px');
  $('.toUp').fadeOut(500);
}

$(window).scroll( () => {
  let wscroll = $(window).scrollTop();
  if (wscroll > aboutOffset - 50) {
    $('nav').removeClass('bg-transparent');
    $('nav').css('backgroundColor', 'rgba(0, 0, 0, 0.6)');
    $('nav').find('.container-fluid').css('padding-left', '5px');
    $('nav').find('.container-fluid').css('padding-right', '5px');
    $('.toUp').fadeIn(500);
  }
  else {
    $('nav').addClass('bg-transparent'); 
    $('nav').find('.container-fluid').css('padding-left', '100px');
    $('nav').find('.container-fluid').css('padding-right', '100px');
    $('.toUp').fadeOut(500);
  }
});

$('.toUp').click( () => {
  $('html, body').animate({scrollTop: 0}, 1000);
})

$('a[href^="#"]').click( function () {
  let aHref = $(this).attr('href');
  let linkOffset = $(aHref).offset().top;
  $('html, body').animate({scrollTop: linkOffset}, 1000);
})

$(document).ready(function () {
  $('.lds-ripple').fadeOut(10, () => {
    $('.loading').fadeOut(10, () => {
      $('html, body').removeClass('overflow-hidden');
    });
  })
});

let colorItem = $('.color-item');
colorItem.eq(0).css('backgroundColor', 'rgba(255, 0, 0, 0.3)');
colorItem.eq(1).css('backgroundColor', 'rgba(0, 128, 128, 0.3)');
colorItem.eq(2).css('backgroundColor', 'rgba(0, 153, 204, 0.3)');
colorItem.eq(3).css('backgroundColor', 'rgba(128, 0, 128, 0.3)');

colorItem.click( function () {
  let bgColor = $(this).css('backgroundColor');
  $('.change').css('color', bgColor);
})

$('.gear').click( () => {
  let cBoxWidth = $('.colors-box').innerWidth();
  if ($('.side-bar').css('left') == '0px') {
    $('.side-bar').animate({left: -cBoxWidth}, 500)
  }
  else {
    $('.side-bar').animate({left: '0px'}, 500);
  }
})