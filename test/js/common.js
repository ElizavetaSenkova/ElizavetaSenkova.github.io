$(function() {

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

	$(".menu-toggle").click(function(){
		$(this).toggleClass("active");
		$(this).toggleClass("close");
		if ( $(".header-menu").is(":visible") ){
			$(".header-menu").fadeOut();
			$(".overlay").css('display','none');
			$("body").css('overflow-y','auto');
		} else {
			$(".header-menu").fadeIn();
			$(".overlay").css('display','block');
			$("body").css('overflow-y','hidden');
		}
	});

	$(".overlay").click(function(){
		$(".menu-toggle").toggleClass("active");
		$(".menu-toggle").toggleClass('close');
		if ( $(".header-menu").is(":visible") ){
			$(".header-menu").fadeOut();
			$(".overlay").css('display','none');
			$("body").css('overflow-y','auto');
		} else {
			$(".header-menu").fadeIn();
			$(".overlay").css('display','block');
			$("body").css('overflow-y','hidden');
		}
	});

});
