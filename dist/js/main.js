$('.video').parent().on("click", function () {
  if ($(this).children(".video").get(0).paused) {
    $(this).children(".video").get(0).play(); $(this).children(".video-btn").fadeOut();
  } else {
    $(this).children(".video").get(0).pause();
    $(this).children(".video-btn").fadeIn();
  }
});

$('#owl-demo1').owlCarousel({
  loop: true,
  items: 3,
  nav: false,
  dots: true,
  margin: 0,
});



$('#owl-demo2').owlCarousel({
  loop: true,
  items: 1,
  nav: true,
  dots: true,
  margin: 0,
});

// stars jquery start
var windowWidth = $(window).width();

$('body').mousemove(function (event) {
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('.rec').css('margin-left', -moveX + 'px');
  $('.rec').css('margin-top', moveY + 'px');
  $('.rec2').css('margin-left', -moveX + 'px');
  $('.rec2').css('margin-top', moveY + 'px');
  $('.rec3').css('margin-left', -moveX + 'px');
  $('.rec3').css('margin-top', moveY + 'px');
  $('.rec4').css('margin-left', -moveX + 'px');
  $('.rec4').css('margin-top', -moveY + 'px');
  $('.rec5').css('margin-left', moveX + 'px');
  $('.rec5').css('margin-top', -moveY + 'px');
  // $('.rec6').css('margin-left', moveX + 'px');
  // $('.rec6').css('margin-top', -moveY + 'px');
  $('.rec7').css('margin-left', moveX + 'px');
  $('.rec7').css('margin-top', -moveY + 'px');
  // $('.rec8').css('margin-left', moveX + 'px');
  // $('.rec8').css('margin-top', -moveY + 'px');
  $('.rec9').css('margin-left', moveX + 'px');
  $('.rec9').css('margin-top', -moveY + 'px');
  $('.rec10').css('margin-left', moveX + 'px');
  $('.rec10').css('margin-top', -moveY + 'px');
  $('.rec11').css('margin-left', moveX + 'px');
  $('.rec11').css('margin-top', -moveY + 'px');
  $('.rec12').css('margin-left', moveX + 'px');
  $('.rec12').css('margin-top', -moveY + 'px');
  $('.rec13').css('margin-left', moveX + 'px');
  $('.rec13').css('margin-top', -moveY + 'px');
  $('.rec14').css('margin-left', moveX + 'px');
  $('.rec14').css('margin-top', -moveY + 'px');
  $('.features-rec1').css('margin-left', -moveX + 'px');
  $('.features-rec1').css('margin-top', moveY + 'px');
  $('.features-rec2').css('margin-left', -moveX + 'px');
  $('.features-rec2').css('margin-top', moveY + 'px');
  // $('.features-rec3').css('margin-left', -moveX + 'px');
  // $('.features-rec3').css('margin-top', moveY + 'px');
  $('.features-rec4').css('margin-left', -moveX + 'px');
  $('.features-rec4').css('margin-top', -moveY + 'px');
  $('.features-rec5').css('margin-left', moveX + 'px');
  $('.features-rec5').css('margin-top', -moveY + 'px');
  $('.features-rec6').css('margin-left', moveX + 'px');
  $('.features-rec6').css('margin-top', -moveY + 'px');
  $('.awesome-rec1').css('margin-left', -moveX + 'px');
  $('.awesome-rec1').css('margin-top', moveY + 'px');
  $('.awesome-rec2').css('margin-left', -moveX + 'px');
  $('.awesome-rec2').css('margin-top', moveY + 'px');
  $('.awesome-rec3').css('margin-left', -moveX + 'px');
  $('.awesome-rec3').css('margin-top', moveY + 'px');
  $('.awesome-rec4').css('margin-left', -moveX + 'px');
  $('.awesome-rec4').css('margin-top', -moveY + 'px');
  $('.awesome-rec5').css('margin-left', moveX + 'px');
  $('.awesome-rec5').css('margin-top', -moveY + 'px');
  $('.awesome-rec6').css('margin-left', moveX + 'px');
  $('.awesome-rec6').css('margin-top', -moveY + 'px');
  $('.awesome-rec7').css('margin-left', -moveX + 'px');
  $('.awesome-rec7').css('margin-top', -moveY + 'px');
  $('.awesome-rec8').css('margin-left', moveX + 'px');
  $('.awesome-rec8').css('margin-top', -moveY + 'px');
  $('.awesome-rec9').css('margin-left', moveX + 'px');
  $('.awesome-rec9').css('margin-top', -moveY + 'px');
  $('.app-rec1').css('margin-left', moveX + 'px');
  $('.app-rec1').css('margin-top', -moveY + 'px');
  // $('.app-rec2').css('margin-left', -moveX + 'px');
  // $('.app-rec2').css('margin-top', moveY + 'px');
  $('.app-rec3').css('margin-left', -moveX + 'px');
  $('.app-rec3').css('margin-top', moveY + 'px');
  $('.app-rec4').css('margin-left', -moveX + 'px');
  $('.app-rec4').css('margin-top', moveY + 'px');
  // $('.app-rec5').css('margin-left', -moveX + 'px');
  // $('.app-rec5').css('margin-top', -moveY + 'px');
  $('.app-rec6').css('margin-left', moveX + 'px');
  $('.app-rec6').css('margin-top', -moveY + 'px');
  $('.app-rec7').css('margin-left', -moveX + 'px');
  $('.app-rec7').css('margin-top', -moveY + 'px');
  $('.app-rec8').css('margin-left', moveX + 'px');
  $('.app-rec8').css('margin-top', -moveY + 'px');
  $('.app-rec9').css('margin-left', moveX + 'px');
  $('.app-rec9').css('margin-top', -moveY + 'px');
  $('.app-rec10').css('margin-top', -moveY + 'px');
  $('.app-rec10').css('margin-left', moveX + 'px');
  $('.test-rec1').css('margin-left', moveX + 'px');
  $('.test-rec1').css('margin-top', -moveY + 'px');
  $('.test-rec2').css('margin-left', -moveX + 'px');
  $('.test-rec2').css('margin-top', moveY + 'px');
  $('.test-rec3').css('margin-left', -moveX + 'px');
  $('.test-rec3').css('margin-top', moveY + 'px');
  $('.test-rec4').css('margin-left', -moveX + 'px');
  $('.test-rec4').css('margin-top', moveY + 'px');
  $('.test-rec5').css('margin-left', -moveX + 'px');
  $('.test-rec5').css('margin-top', -moveY + 'px');
  // $('.test-rec6').css('margin-left', moveX + 'px');
  // $('.test-rec6').css('margin-top', -moveY + 'px');
});
// stars jquery end
function myFunction() {
  var x = document.getElementById("head");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


// scroll class js
$('.animate').scrolla();
$('.animate').scrolla({
  mobile: false, // disable animation on mobiles 
  once: false // only once animation play on scroll
});


$('.play-btn').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});