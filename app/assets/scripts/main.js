$(document).ready(function() {
  // Section 0: Functions

  //// SameSize: Screen - Index
  var setIndexSize = function() {
    var windowSize = $(window).height();
    var textSize = $($('#index div')[0]).outerHeight();
    var footerSize = $('#footer').outerHeight();
    
    $('#index').height(windowSize);
    
    if (textSize <  windowSize) {
      $('#index').css('padding-top',((windowSize-textSize)/2)+'px');
    };
  };

  // Section 1: Data & Init;
  //// Section 1.0; Set Index
  setIndexSize();
  $('#index').backstretch([
    './assets/images/backgrounds/index0.jpg',
    './assets/images/backgrounds/index1.jpg',
    './assets/images/backgrounds/index2.jpg'    
  ], {
    duration: 4000,
    fade: 750
  });
  
  // Match Heigth
  $('.ido').matchHeight();

  // Slick
  $('#ac').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true
  });

  // Modal Projects
  var openModal = function (project) {
    $('#modal-content').html('<div class="text-center"><i class="fa fa-spinner fa-pulse fa-3x"></i></div>');
    $('#modal-content').load('views/projects/'+project+'.html');
    $('#modal').modal();
  };

  // Events Handle
  $('.open-modal').on('click', function () {
    openModal($(this).attr('id'));
  });

    // Change Carousel Size
  $('#modal-content').on('click','#carousel-change', function () {
    var size = parseInt($('#carousel-container').attr('data-size'));
    var carousel = $('#carousel-container');
    carousel.removeClass();
    size = (size + 1) % 4;
    carousel.attr('data-size',size);
    switch(size) {
    case 0:
      carousel.addClass('col-sm-4 col-sm-offset-4');
      break;
    case 1:
      carousel.addClass('col-sm-6 col-sm-offset-3');
      break;
    case 2:
      carousel.addClass('col-sm-8 col-sm-offset-2');
      break;
    case 3:
      carousel.addClass('col-sm-12');
      break;
    }
  });
});
