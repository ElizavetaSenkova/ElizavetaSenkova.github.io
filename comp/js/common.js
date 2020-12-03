$(function() {

  // Custom JS
  
  $('.services__card-btn').click(function () {
    $(this).parent().toggleClass("active");
  });


  $('.services-background .services__card-btn').click(function () {
    var id = $(this).parent().prop('id');

    $(this).parent().toggleClass(id);
  });
  




  // projects-slide
  $('.projects__list').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    nextArrow: '<i class="arrow-right fas fa-arrow-right"></i>',
    prevArrow: '<i class="arrow-left fas fa-arrow-left"></i>',
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
  // projects-slide



  // utility-slide
  $('.utility__list').slick({
    centerMode: true,
    slidesToShow: 4,
    arrows: true,
    nextArrow: '<i class="arrow-right fas fa-arrow-right"></i>',
    prevArrow: '<i class="arrow-left fas fa-arrow-left"></i>',
    dots: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  // utility-slide




  // button-page-top
  $('.utility__page-top').click(function() {
    // переместиться в верхнюю часть страницы
    $('html, body').animate({
      scrollTop:0
    },1000);
  });
  // button-page-top



  // animation

  // scroll-page
  $(window).scroll(function() {
    $('.move').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('animated fadeInUp');
      }
    });
  });


  // services-cards
  $('.services-easy .services__card-btn').click(function () {
    $(this).parent().children().addClass("animated fadeInUp");
  });

  $('.services-background .services__card-btn').click(function () {
    $(this).parent().children().addClass("animated fadeIn");
  });


  /* Анимация счетчика цифр */
  var a = 0;

  $(window).scroll(function() {

    var oTop = $('.advantages__card').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }

          });
      });
      a = 1;
    }

  });


  // animation


  




});
