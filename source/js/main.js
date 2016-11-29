$(document).ready(function() {

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
  article.find('ul').addClass('collection');
  article.find('li').addClass('collection-item');
}
