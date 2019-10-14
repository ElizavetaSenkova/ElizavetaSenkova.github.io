$(function() {


	$(".header-menu__link").click(function(event){
		$(".header-menu__link").removeClass('header-menu__link_active');
		$(this).addClass('header-menu__link_active');
	})

	// product select params
	$(".product-options-block__lenght li").click(function(event){
		$(".product-options-block__lenght li").removeClass('active');
		$(this).addClass('active');
	})
	$(".product-options-block__shape li").click(function(event){
		$(".product-options-block__shape li").removeClass('active');
		$(this).addClass('active');
	})

	// color picks
	$(".product-options-block__palette li").each(function() {
		var bgc = $(this).data("color");
		$(this).css("background-color", bgc);
	})


	$(".product-options-block__pipette").click(function(){
		$(".product-options-block__palette").css("display", "flex");
	})
	
	$(".product-options-block__palette li").click(function(event){
		let bgc = $(this).data("color");
		$(".product-options-block__palette li").removeClass("active");
		$(this).addClass("active");
		$(".product-options-block__palette").fadeOut();
		$(".product-options-block__color").css("background-color", bgc);
		$(".product-options-block__color").data("color", bgc);

		// white check
		if (bgc == "#ffffff"){
			$(".product-options-block__color").css("border", "2px solid #e8e8e8");
		} else{
			$(".product-options-block__color").css("border", "none");
		}
	})	

	$(document).mouseup(function (e) {
    var container = $(".product-options-block__palette");
    if (container.has(e.target).length === 0){
        container.hide();
    }
	});
	// color pic end

	// counter incr and decr
	$(".incr").click(function(){
		let totalCount = $(".product-options__count input").val().split(" ");
		let num = parseInt(totalCount[0]) + 1;
		totalCount = num +  " шт.";
		$(".product-options__count input").val(totalCount);
	})
	$(".decr").click(function(){
		let totalCount = $(".product-options__count input").val().split(" ");
		let num = parseInt(totalCount[0]) - 1;
		totalCount = num + " шт.";
		$(".product-options__count input").val(totalCount);
	})



	//about tabs
	$(".about-block").hide();
	$(".about-block").first().show();

	$(".about-tabs li").click(function(){
		$(".about-tabs li").removeClass('active');
		$(this).addClass("active");

		let tabId = $(this).find("a").attr("href");

		$(".about-block").hide();
		$(tabId).fadeIn(300);
	})


	// gallery slider
	$('.gallery-container').slick({
    infinite: true,
	  prevArrow: $('.gallery-navs__prev'),
    nextArrow: $('.gallery-navs__next'),
    slidesToShow: 4,
	  slidesToScroll: 4,
	  rows: 2,
    responsive: [
    {
      breakpoint: 1450,
      settings: {
      	dots: true,
        slidesToShow: 4,
			  slidesToScroll: 4,
				rows: 2	,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
				rows: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        rows: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        centerPadding: '20px',
        autoplay: true
      }
    },
  ]
  });

	// ropes slider
	$(".ropes-slider").slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  variableWidth: true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1340,
	      settings: {
	      	dots: true,
	        slidesToShow: 4,
				  slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: true,
	        rows: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: true,
	        rows: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	      	centerMode: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        rows: 1,
	        dots: true,	
	      }	
	    },
	  ]
	});

//hamburger-menu
$('.menu-btn').on('click', function() {
	$('.hamburger-menu').toggleClass('animate');
	if ( $('.header-menu__wrap_mobile ul').is(":visible") ){
		$('.header-menu__wrap_mobile ul').hide();
		$('.header-menu__wrap_mobile').toggleClass("shadow");

	} else{
		$('.header-menu__wrap_mobile ul').show();
		$('.header-menu__wrap_mobile').toggleClass("shadow");
	}
})

$(".header-menu__wrap_mobile ul li a").click(function(){
	if ( $('.header-menu__wrap_mobile ul').is(":visible") ){
		$('.header-menu__wrap_mobile ul').hide();
		$('.header-menu__wrap_mobile').toggleClass("shadow");
		$('.hamburger-menu').toggleClass('animate');
	}
})


$(".delivery-racks__strong:eq(1)").css("margin-bottom", "0px");
$(".delivery-racks__strong:eq(2)").css("margin-top", "0px");

$('.services-painting__slider').slick({
	arrows: false,
	dots: true,
});

$('.services-customers__list').slick({
	arrows: true, 
  infinite: true,
  speed: 300,
  slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: $(".services-customers__prev"),
	nextArrow: $(".services-customers__next"),
	responsive: [
		{
			breakpoint: 1483,
			settings: {
				dots: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				arrows: false,
		}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				rows: 1,
				arrows: false,
		}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				rows: 1,
				arrows: false,
			}
		},
	]
})

function initTabs1() {
  // show first content by default
  $('.rope__tab:first-child').addClass('active');
  $('.rope__general-tab').hide();
  $('.rope__general-tab:first').show();

  // click function
  $('.rope__tab').click(function() {
    $('.rope__tab').removeClass('active');
    $(this).addClass('active');
    $('.rope__general-tab').hide();
    var activeTab = $(this).data('id');
    $('#' + activeTab).show();
  });
}

initTabs();

initTabs1();

$('.index__slider').slick({
	arrows: true, 
  infinite: true,
  speed: 300,
  slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $(".index__prev"),
	nextArrow: $(".index__next"),
	responsive: [
		{
			breakpoint: 1340,
			settings: {
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 1010,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				rows: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				rows: 1,
			}
		},
	]
})

function initTabs() {
  // show first content by default
  $('.index-products__tab:first-child').addClass('active');
  $('.index-products__general-tab').hide();
  $('.index-products__general-tab:first').show();

  // click function
  $('.index-products__tab').hover(function() {
    $('.index-products__tab').removeClass('active');
    $(this).addClass('active');
    $('.index-products__general-tab').hide();
    var activeTab = $(this).data('id');
    $('#' + activeTab).show();
	});
	
	$('.index-products__select-fence').change(function(){
    $('.index-products__general-tab').hide();
    $('#tab-' + $(this).val()).show();
	})

	$('.index-products__select-seria').change(function(){
		 
filterSelection($(this).val(),$(this).parents('.index-products__general-tab').attr('id'))
     
	})


	$('.index-products__filter-btn').click(function() {
    $('.index-products__filter-btn').removeClass('active');
		$(this).addClass('active'); 
		filterSelection($(this).data('filter'),$(this).parents('.index-products__tab').data('id'));
  });
}

 

filterSelection("all",'tab-1')
function filterSelection(c,t) {
	console.log(t);
  var x, i;
  x = document.getElementById(t)
  if (x != null){
  	if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  	x = x.getElementsByClassName("filterDiv");
  	for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  }
 
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}
 
$('.index-investment__list').slick({
	arrows: true, 
  infinite: false,
  speed: 300,
	slidesToShow: 6,
	rows: 2,
	slidesToScroll: 1,
	dots: false,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1340,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
				dots: false,
				rows: 3,
				arrows: false,
			}
		},
		{
			breakpoint: 1010,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				dots: true,
				rows: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				rows: 1,
				arrows: false,
				centerMode: true,
			}
		},
	]
});

$(".index-news__list").slick({
	arrows: true, 
  infinite: false,
  speed: 300,
	slidesToShow: 3,
	rows: 1,
	slidesToScroll: 1,
	dots: false,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1340,
			settings: {
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				rows: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
				rows: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				rows: 1,
				arrows: false,
				centerMode: true,
			}
		},
	]
});

 

// $('.index-products-good__order-btn').click(function() {
//   $('.popup-order').show();
// });

// $('.popup-order__close').click(function() {
// 	$('.popup-order').hide();
// });


// function closePopup() {
//   $.magnificPopup.close();
// }

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

});
