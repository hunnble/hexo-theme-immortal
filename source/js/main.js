$(document).ready(function() {

  $('.collapsible').collapsible();
  $('#side-nav-switcher').sideNav();

  highlight();
  post();

});

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
}

function post() {
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
};
