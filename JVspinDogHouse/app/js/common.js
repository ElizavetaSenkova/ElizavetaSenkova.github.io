$(function() {

	// partners-slider

	$(".partners__list").slick({
		infinite: true,
		slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
				}
      },
      {
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
				}
			},
		]
	});

  // partners-slider



  // partners-slider-2

	$(".partners__list-2").slick({
		infinite: true,
		slidesToShow: 10,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
				}
      },
      {
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
				}
			},
		]
	});

  // partners-slider-2

});
