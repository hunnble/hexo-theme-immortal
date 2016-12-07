$(document).ready(function() {

  var parallaxOffset = $('.parallax-container').height();

  $('.collapsible').collapsible();
  $('#side-nav-switcher').sideNav();

  scroll(parallaxOffset);
  highlight();
  post(parallaxOffset);
  fancybox();

});

function scroll(offset) {
  if ('undefined' === $('.parallax-container')) {
    return false;
  }
  $('.parallax-container').css({
    'height': offset
  });
  $('.parallax').parallax();

  offset -= $('.navbar-fixed>nav').height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > offset && !$('.navbar-fixed>nav').hasClass('white')) {
      $('.navbar-fixed>nav').removeClass('transparent');
      $('.navbar-fixed>nav').addClass('white');
      $('.navbar-fixed a, .navbar-fixed ul').addClass('black-text');
    } else if ($(window).scrollTop() < offset && $('.navbar-fixed>nav').hasClass('white')) {
      $('.navbar-fixed>nav').addClass('transparent');
      $('.navbar-fixed>nav').removeClass('white');
      $('.navbar-fixed a, .navbar-fixed ul').removeClass('black-text');
    }
  });

}

function links() {
  $('.fixed-action-btn').openFAB();
}

function highlight() {
  if ('undefined' === hljs) {
    return false;
  }

  $('pre div').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('code').each(function(i, inline) {
    hljs.highlightBlock(inline);
  });
}

function post(offset) {
  var $toc = $('.toc');

  if (!$toc.offset()) {
    return false;
  }
  $toc.pushpin({
    top: offset,
    offset: $toc.offset().top - offset
  });

  var hash = window.location.hash;
  var pathList = $('.toc li a');
  for (var i = 0, l = pathList.length; i < l; i++) {
    var tempa = pathList.eq(i);
    $(tempa.attr('href')).scrollSpy();

    if (tempa.attr('href') === hash) {
      tempa.parent().addClass('active');
    }
  }
}

function fancybox() {
  if ('undefined' !== $(".fancybox")) {
    $(".fancybox").fancybox();
  }
}

function tool() {
  $('#back-to-top').click(function(event) {
    event.preventDefault();
    $('body').scrollSpy();
  });
}
