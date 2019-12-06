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
		
		var show = true;
    var countbox = ".course";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.course-list li span').css('opacity', '1');
            $('.course-list li span').spincrement({
                thousandSeparator: "",
                duration: 2000,
            });
             
            show = false;
        }
    });

});
