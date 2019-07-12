$(function() {

	// preview-slider

	$("#preview__slider").slick({
    dots: true,
		slidesToShow: 1,
		arrows: true,
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

	$('#preview__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
		if(nextSlide==0){
			$(".preview").css({'background-image': 'url(img/preview/preview-1.jpg)'});
		}

		if(nextSlide==1){
				$(".preview").css({'background-image': 'url(img/preview/preview-1.jpg)'});
		}

		if(nextSlide==2){
				$(".preview").css({'background-image': 'url(img/preview/preview-1.jpg)'});  
		}

	});

	// preview-slider



	// collection-slider

	$("#collections__slider").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
			},
		]
	});

	// collection-slider



	// imagery-slider

	$("#imagery__slider").slick({
    dots: false,
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev">ПРЕДЫДУЩИЙ ОБРАЗ</button>',
		nextArrow: '<button type="button" class="slick-next">СЛЕДУЮЩИЙ ОБРАЗ</button>',
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

	// imagery-slider

	// catalog-slider

	$("#catalog__slider").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: true,
		arrows: true,
		nextArrow: '<img class="slick-next" src="img/catalog/arrow-right.png"></img>',
		rows: 2,
		responsive: [
			{
				breakpoint: 1520,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	// catalog-slider


	let magicGrid = new MagicGrid({
		container: ".grid-container",
		animate: true,
		gutter: 30,
		static: true,
		useMin: true
	});

		magicGrid.listen();
		
	// menu

	$('.page-header__open-menu').click(function() {
		$('.page-header__nav-wrapper').show();
		$('.overlay').show();
	});

	$('.page-header__close-menu').click(function() {
		$('.page-header__nav-wrapper').hide();
		$('.overlay').hide();
	});

	// menu


});
