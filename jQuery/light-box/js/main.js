$('.container').animate({ width: '100%' }, 1000);
$('.container').animate({ height: '180vh' }, 2000, () => {
  $('h3').slideDown(1000 , () => {
    $('p').fadeIn(1000 , () => {
      $('.col-md-4').fadeIn(1000 , () => {
        $('.curosal').fadeIn(1000);
      });
    });
  });
});

$('.imgItem').click( function () {
  let imgSrc = $(this).attr('src');
  $('#mainImg').attr('src', imgSrc);
  console.log('hi');
});