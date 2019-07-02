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

	$('#assortment__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){ 
		if($("#first_item").parents('.slick-slide').hasClass("slick-active")){
			$(".assortment").css({'background-image': 'url(../img/assortment/pro/back.jpg)'});
		}

		if($("#second_item").parents('.slick-slide').hasClass("slick-active")){
				$(".assortment").css({'background-image': 'url(../img/assortment/auto/back.jpg)'});
		}

		if($("#third_item").parents('.slick-slide').hasClass("slick-active")){
				$(".assortment").css({'background-image': 'url(../img/assortment/master/back.jpg)'});  
		}

		if($("#fourth_item").parents('.slick-slide').hasClass("slick-active")){
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

});

