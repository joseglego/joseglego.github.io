$(document).ready(function() {
  // Section 0: Functions

  //// SameSize: Screen - Index
  var setIndexSize = function() {
    var windowSize = $(window).height();
    var textSize = $($('#index div')[0]).outerHeight();
    var footerSize = $('#footer').outerHeight();
    
    $('#index').height(windowSize-footerSize);
    
    if (textSize <  windowSize) {
      $('#index').css('padding-top',((windowSize-textSize-footerSize)/2)+'px');
    };
  };

  // Section 1: Data & Init;
  setIndexSize();
});
