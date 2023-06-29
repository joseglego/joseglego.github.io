// Secion X: Name          # Line 0
//// X. Title              # Line 1
// Line 0: Inidcate Section { 0. Functions | 1. EventHandlers | 2. Init & Data}
// Line 1: Indicate Module & Small description (In extends sections this is helpful

$(document).ready(function() {  
  // Section 0: Functions
  //// 0. Modal Projects
  var openModal = function(project) {
    $('#modal-content').html('<div class="text-center"><i class="fa fa-spinner fa-pulse fa-3x"></i></div>');
    $('#modal-content').load('views/projects/'+project+'.html');
    $('#modal').modal();
  };

  //// 0. OldVersion Message: Show Message
  swal({
    type: 'info',
    title: 'Archived Page: 2016',
    html: 'You are in the 2016 version of this webpage! You can continue here but remember you can always go to:<br/><a href="https://joseglego.io">Latest Version</a> <br/> <a href="https://timetravel.joseglego.io">TimeTravel Page</a>'
  })

  //// 0. Waiting Message: Show Message
  var waitingStart = function() {
    sending = swal('Wait...', 'Sending your email. It will close when finish.');
  };

  //// 0. Waiting Message: Close Message
  var waitingStop = function() {
    sending.close();
  };

  //// 0. Send Email
  var sendEmail = function() {
    $.ajax({
      url: 'https://formspree.io/me@joseglego.io',
      method: 'POST',
      data: {
        name: $('#name').val(),
        message: $('#message').val(),
        email: $('#email').val(),
        _subject: $('#subject').val()
      },
      dataType: 'json',
      beforeSend: waitingStart
    }).done(function(data) {
      var name = $('#name').val();
      $('#name').val('');
      $('#email').val('');
      $('#name').val('');
      $('#subject').val('');
      $('#message').val('');
      swal.close();
      setTimeout(function() {
        swal('Great', 'Your email was sent. I will contact you, '+name+', soon. Thank you', 'success');
      }, 500);
    }).fail(function(response) {
      swal.close();
      setTimeout(function() {
        swal('Oops...', 'An error ocurred. Please, try again send the email!', 'error');
      },500);
    });
  };

  //// 0. Float Navbar
  var floatNavbar = function() {
    var y = $(document).scrollTop();
    var windowSize = $(window).height();
    var header = $('#menu');
    
    //show the header fixed
    if (y >= windowSize) {
      header.addClass('navbar-fixed-top');
    } else {
      header.removeClass('navbar-fixed-top');
    }

    // show the active element
    if (y > $('#experience').position().top) {
      $('ul-menu li').removeClass('active');
    }
  };

  //// 0. Load Async Fonts:
  var loadFonts = function() {
    WebFontConfig = {google: { families: [ 'Oxygen:300','Montserrat:700'] }};
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  };

  // Let's Make it rain!
  var makeItRain = function () {
    $('#tools .icon-tools').each(function (index) {
      $(this).addClass('invisible');
      $(this).attr({
        'data-animated': 'fadeInDown',
        'data-animated-delay': Math.floor(Math.random() * 5) + 1
      });
    });
  }

  // Section 1: Events Handler
  //// 1. When click on Project
  $('.open-modal').on('click', function() {
    openModal($(this).attr('id'));
  });

  //// 1. Change Carousel Size
  $('#modal-content').on('click','#carousel-change', function() {
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

  //// 1. FormValidation
  $contactFormValidator = $('#contact-form').validate({
    highlight: function(element) {
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
      $(element).remove();
    },
    errorPlacement: function(error, element) {
      element.parent().append(error);
    },
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },
    submitHandler: function() {
      sendEmail();
    }
  });

  //// 1. Click on Email@ContactInfo
  $('#go-to-email').click(function() {
    $('#name').focus();
    sweetAlert({
      title: 'Write Me',
      text: 'You can write me though the Contact form. You will be writing your name when this message closes (it will close automatically).',
      timer: 7000,
      showConfirmButton: true
    });
  });
  
  // Section 2: Data & Init;
  //// 2. Load Fonts
  loadFonts();

  //// 2. Match Heigth
  $('.ido').matchHeight();
  $('.contact').matchHeight();
 
  //// 2. Slick
  $('.hidden').removeClass('hidden');
  $('#ac').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true
  });

  //// 2. Fixed Navbar
  $(document).scroll(function() {
    floatNavbar();
  });

  // Close Menu when select Section
  $('#navbar-lego').click('li', function() {
    $('#navbar-lego').collapse('hide');
  });
  
  //// 2. SmootScroll
  smoothScroll.init({
    offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
  });

  //// 2. ScrollSpy
  $('body').scrollspy({ target: '#navbar-lego', offset: 64});

  //// 2. Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Appear
  makeItRain();
  $('[data-animated]').appear();
  $('[data-animated]').on('appear', function(event, $all_appeared_elements) {
    var time = !mobile ? parseInt($(this).attr('data-animated-delay')) | 0 : 0;
    var effect = $(this).attr('data-animated');
    var element = this;
    setTimeout(function() {
      $(element).removeClass('invisible');
      $(element).addClass('animated '+effect);
    }, time * 300);
  });


});
