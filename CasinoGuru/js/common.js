$(function() {

	// tabs
  $('#my-tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#my-tabs li:first-child a').tab('show');
  // tabs

  // blog-grid
  let magicGrid = new MagicGrid({
    container: ".grid-container",
    animate: true,
    gutter: 30,
    static: true,
    useMin: true
  });

  magicGrid.listen();
  // blog-grid


  // popular-slider

	$("#popular-slider").slick({
		infinite: true,
		slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    nextArrow: '<i class="popular-arrow-right fas fa-chevron-right"></i>',
    prevArrow: '<i class="popular-arrow-left fas fa-chevron-left"></i>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

  // popular-slider
  
  // online-slider

	$("#online-slider").slick({
		infinite: true,
		slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    nextArrow: '<i class="online-arrow-right fas fa-chevron-right"></i>',
    prevArrow: '<i class="online-arrow-left fas fa-chevron-left"></i>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

	// online-slider

});
