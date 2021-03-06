$(function() {

	// like

	$(".like").click(function(){ 
		$(this).toggleClass('like-active'); 
	});

	// like



	// change-menu-no-authorization

	$('.subscribe').click(function(){
		if (!$(this).data('status')) {
			$(this).html('ОТПИСАТЬСЯ');
			$(this).data('status', true);
		}
		else {
			$(this).html('ПОДПИСАТЬСЯ');
			$(this).data('status', false);
		}
	});

	$('.favourite').click(function(){
		if (!$(this).data('status')) {
			$(this).html('УБРАТЬ ИЗ ИЗБРАННОГО');
			$(this).data('status', true);
		}
		else {
			$(this).html('ДОБАВИТЬ В ИЗБРАННОЕ');
			$(this).data('status', false);
		}
	});

	$('.unlock').click(function(){
		if (!$(this).data('status')) {
			$(this).html('РАЗБЛОКИРОВАТЬ');
			$(this).data('status', true);
		}
		else {
			$(this).html('ЗАБЛОКИРОВАТЬ');
			$(this).data('status', false);
		}
	});

	// change-menu-no-authorization



	// popup

	$('.popup-with-form').magnificPopup({
		type: 'inline', 
		preloader: false,
		focus: '#name',
	
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



	// filter-patients-search

	function filterList(header, list) {
    var  input = $("#form input"); 

    $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
					
					$matches = $(list).find('p:Contains(' + filter + ')').parents('.slick-slide'); 
          $('.slick-slide', list).not($matches).hide();
          $matches.show();

        } else {
          $(list).find(".slick-slide").show();
				}
				$("#patients__slider").slick('slickGoTo','0')
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }

  $(function () {
    filterList($("#form"), $("#patients__slider"));
	});
	
	// filter-patients-search


	// patients__slider

	$("#patients__slider").slick({
    dots: false,
		slidesToShow: 6,
		infinite:false,
		arrows: true,
		slidesToScroll: 6,
	});

	// patients__slider



	// doctor-select

	$('input[type="text"], input[type="file"], select').styler();

	// doctor-select



	// filter-gp-vrachi-page

	function filterList(header, list) {
    var  input = $("#form-doctor1 input"); 

    $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
					
					$matches = $(list).find('a:Contains(' + filter + ')').parents('.doctors__card'); 
          $('.doctors__card', list).not($matches).hide();
          $matches.show();

        } else {
          $(list).find(".doctors__card").show();
				}
				$("#patients__slider").slick('slickGoTo','0')
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }

  $(function () {
    filterList($("#form-doctor1"), $("#doctors"));
	});
	
	// filter-gp-vrachi-page


	//input mask
	$(".phone_mask").mask("8 (999)999-99-99");
	//input mask



	// add-input
	try {

	} catch(e)
	{

	}

	$('.add-form-work').click(function() { 
	 var formWork = $('.edit__form-work>div').eq(0).clone().find("input").val("").end();
	formWork.appendTo($(".edit__form-work"));
	$('.datepicker-here').datepicker();
	return false;
	});
	
	$('.add-form-speciality').click(function() { 
		var formWork = $('.edit__form-speciality>div').eq(0).clone().find("input").val("").end();
		 formWork.appendTo($(".edit__form-speciality"));
		 $('.datepicker-here').datepicker();
	 	return false;
	 });

	 $('.add-form-education').click(function() { 
		var formWork = $('.edit__form-education>div').eq(0).clone().find("input").val("").end();
		 formWork.appendTo($(".edit__form-education"));
		 $('.datepicker-here').datepicker();
	 	return false;
	 });

	 $('.add-form-degree').click(function() { 
		var formWork = $('.edit__form-degree>div').eq(0).clone().find("input").val("").end();
		 formWork.appendTo($(".edit__form-degree"));
		 $('.datepicker-here').datepicker();
	 	return false;
	 });

	 $('.card__add-notice').click(function() { 
		var formWork = $('.card__form-notice>div').eq(0).clone().find("textarea").val("").end();
		 formWork.appendTo($(".card__form-notice"));
	 	return false;
	 });
	 // add-input


	//  page-more-img

		$("#lightgallery").lightGallery(); 

		// $('.popup-gallery').magnificPopup({
		// 	delegate: 'a',
		// 	type: 'image',
		// 	tLoading: 'Loading image #%curr%...',
		// 	mainClass: 'mfp-img-mobile',
		// 	gallery: {
		// 		enabled: true,
		// 		navigateByImgClick: true,
		// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		// 	},
		// 	image: {
		// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		// 	}
		// });

	//  page-more-img


	// messages-page
		$('.toggler').on('click', function() { 
			$(this).parents('.messages__card').siblings().find('.box').removeClass('messages__card-show');
			$(this).parents('.messages__card').find('.box').toggleClass('messages__card-show');

			return false;
		});
	// messages-page
 


	// register-open-menu

	$(".register__list .register__buton").click(function(){
		$(".register__list .register__buton").parent().parent().parent().removeClass("selected");
		$(this).parent().parent().parent().addClass("selected");
		// console.log("q");
		return false;
	});

	$(".register__item .register__change").click(function() {
		$(this).parent().parent().parent().find('.register__more-list li').attr("href", "#complex_form");
		$(this).parent().parent().parent().find('.register__more-list li').css("cursor", "pointer");
	});
	// register-open-menu



	// menu-IE
	function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

if (detectIE()){
    var top = 0;
    $('.internal-page .menu__list li').hover(function(){
        top = ($(this).offset().top - $(window).scrollTop())
        var span = $(this).find('span')
        span.each(function(){
           $(this).css('position','fixed')
           $(this).css('top',top)
           top += 38
        })
    })
}
	// menu-IE


	// diagnosis
	var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
			var matches, substringRegex;
	
			// an array that will be populated with substring matches
			matches = [];
	
			// regex used to determine if a string contains the substring `q`
			substrRegex = new RegExp(q, 'i');
	
			// iterate through the pool of strings and for any string that
			// contains the substring `q`, add it to the `matches` array
			$.each(strs, function(i, str) {
				if (substrRegex.test(str)) {
					matches.push(str);
				}
			});
	
			cb(matches);
		};
	};
	
	var states = ['Повреждение голеностопного сустава', 'Повреждение ахиллова сухожилия',
		'Повреждение связок голеностопного сустава', 'Пяточная шпора'];
	
	$('#the-basics .typeahead').typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	},
	{
		name: 'states',
		source: substringMatcher(states)
	});
	// diagnosis

});
