$(function() {

	// parameters-slider

	$("#parameters__slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).find('[data-title]').data('title') + '<i class="fa fa-sort-asc"></i></button>';
		},
		appendDots:'.custom-dots',
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		fade: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
});

	// parameters-slider

	// assortment-slider

	$("#assortment__slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).find('[data-title]').data('title') + '<i class="fa fa-sort-asc"></i></button>';
		},
		appendDots:'.custom-dots2',
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		fade: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
});

	$('#assortment__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
		if(nextSlide==0){
			$(".assortment").css({'background-image': 'url(../img/assortment/pro/back.jpg)'});
		}

		if(nextSlide==1){
				$(".assortment").css({'background-image': 'url(../img/assortment/auto/back.jpg)'});
		}

		if(nextSlide==2){
				$(".assortment").css({'background-image': 'url(../img/assortment/master/back.jpg)'});  
		}

		if(nextSlide==3){
			$(".assortment").css({'background-image': 'url(../img/assortment/addition/back.jpg)'});  
		}

	});

	// assortment-slider

	// menu

	$('.page-header__open-menu').click(function() {
		$('.page-header__nav-wrapper').show();
		$('.overlay').show();
	});

	$('.page-header__close-menu').click(function() {
		$('.page-header__nav-wrapper').hide();
		$('.overlay').hide();
	});

 	var li = $('.custom-dots li');
	li.each(function(i){
    $(this).attr("id",i+1)  
	})
	li.click(function(){
		id = $(this).attr("id");
    init(id);
	});

	// menu

	// popup

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
	
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	
	$('#close').click(function(){
		$('.mfp-close').trigger('click');
	});

	// popup

	// scroll-menu

	$(document).ready(function(){
    $("#menu").on("click","a.scroll", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	});

	// scroll-menu



});

