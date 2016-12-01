$(document).ready(function() {

  $('.parallax').parallax();
  $('.collapsible').collapsible();
  $('#side-nav-switcher').sideNav();

  article();
  links();
  highlight();
  post();

});

function links() {
  $('.fixed-action-btn').openFAB();
}

function highlight() {
  if (!hljs) {
    return false;
  }
  hljs.initHighlightingOnLoad();
  $('pre code').each(function(i, block) {
    var lines = $(this).text().split('\n').length - 1;
    var $numbering = $('<ul/>').addClass('pre-numbering');
    $(this)
      .addClass('has-numbering')
      .parent()
      .append($numbering);
    for(i=1;i<=lines;i++){
      $numbering.append($('<li/>').text(i));
    }
  });
  $('code').each(function(i, inline) {
    hljs.highlightBlock(inline);
  });
}

function post() {
  // $('.carousel.carousel-slider')
  //   .carousel({
  //     dist: 0,
  //     indicators: true,
  //     full_width: true
  //   });

  if (!$('.toc').offset()) {
    return false;
  }
  $('.toc').pushpin({ offset: $('.toc').offset().top });

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

function article() {
  var article = $('.article');
  article.find('.card-content a').addClass('link');
  article.find('.card-content ul').addClass('collection');
  article.find('.card-content ol').addClass('collection');
  article.find('.card-content li').addClass('collection-item');
  article.find('.card-content table').addClass('centered responsive-table');
}
