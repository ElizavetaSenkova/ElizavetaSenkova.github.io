$(function() {

	// page-header
	$(".page-header__nav button").click(function(){
		$(this).toggleClass("selected");
		$(this).prev('.page-header__nav-link').toggleClass("active");
		$(this).parent().siblings().find("button").removeClass("selected");
		$(this).parent().siblings().find('.page-header__nav-link').removeClass("active");
  });
  
             // mobile
  $(".menu-toggle").click(function(){
		$(this).toggleClass("active");
		$(this).toggleClass("close");
		if ( $(".page-header").is(":visible") ){
			$(".page-header").fadeOut();
			$(".overlay").css('display','none');
			$("body").css('overflow-y','auto');
		} else {
			$(".page-header").fadeIn();
			$(".overlay").css('display','block');
			$("body").css('overflow-y','hidden');
		}
	});

	$(".overlay").click(function(){
		$(".menu-toggle").toggleClass("active");
		$(".menu-toggle").toggleClass('close');
		if ( $(".page-header").is(":visible") ){
			$(".page-header").fadeOut();
			$(".overlay").css('display','none');
			$("body").css('overflow-y','auto');
		} else {
			$(".page-header").fadeIn();
			$(".overlay").css('display','block');
			$("body").css('overflow-y','hidden');
		}
	});
  // page-header


	// burger

	$('.menu-toggle.burger').each(function(){
		$(this).empty().append('<div class="box"></div>');
		var i = 0;
		var rect_classes = ['top','middle','bottom'];
		while (i < 3) {
			$(this).find('.box').append('<div class="rect rect-'+ rect_classes[i] +'"></div>');
			i++;
		}
	});
	
	// burger
		  
});
