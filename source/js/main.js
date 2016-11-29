$(document).ready(function() {

  $('.collapsible').collapsible();
  $('#side-nav-switcher').sideNav();

  highlight();

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
