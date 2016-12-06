$(document).ready(function() {

  var parallaxOffset = $('.parallax-container').height();

  $('.collapsible').collapsible();
  $('#side-nav-switcher').sideNav();

  scroll(parallaxOffset);
  article();
  sidebar();
  // links();
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

  Materialize.scrollFire({
    selector: 'aside section:eq(0)',
    offset: offset,
    callback: function() {
      console.log(1);
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
  // hljs.initHighlightingOnLoad();
  $('pre div').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  // $('pre div').each(function(i, block) {
  //   var lines = $(this).text().split('\n').length - 1;
  //   var $numbering = $('<ul/>').addClass('pre-numbering');
  //   $(this)
  //     .addClass('has-numbering')
  //     .parent()
  //     .append($numbering);
  //   for(i=1;i<=lines;i++){
  //     $numbering.append($('<li/>').text(i));
  //   }
  // });
  $('code').each(function(i, inline) {
    hljs.highlightBlock(inline);
  });
}

function post(offset) {
  // $('.carousel.carousel-slider')
  //   .carousel({
  //     dist: 0,
  //     indicators: true,
  //     full_width: true
  //   });

  var $toc = $('.toc');
  //
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

function article() {
  var $article = $('.article');
  $article.find('.card-content a').addClass('link');
  $article.find('.card-content ul').addClass('collection');
  $article.find('.card-content ol').addClass('collection');
  $article.find('.card-content li').addClass('collection-item');
  $article.find('.card-content table').addClass('centered responsive-table');
  $article.find('.card-content figure table').removeClass('centered responsive-table');
}

function fancybox() {
  if ('undefined' !== $(".fancybox")) {
    $(".fancybox").fancybox();
  }
}

function sidebar() {
  var $sidebar = $('.sidebar');

  if ('undefined' === $sidebar) {
    return false;
  }

  $sidebar.find('ul').addClass('collection');
  $sidebar.find('ul li').addClass('collection-item');

}

function tool() {
  $('#back-to-top').click(function(event) {
    event.preventDefault();
    $('body').animate({ scrollTop: 0 }, 'slow');
  });
}
