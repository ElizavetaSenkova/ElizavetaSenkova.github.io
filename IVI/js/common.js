$(function() {

	$('.crystal__figure').hover(function() {
		$('.crystal').toggleClass('active');
	});

	$('.crystal__figure-block').hover(function() {
		$('.crystal').toggleClass('block');
	});

	function LoopForever() {

		var elements = ['1', '2', '3', 'Go!'];
		var time = 600;
		var delta = 600;

		for (let i = 0; i < elements.length; i++) {

			setTimeout(function() {
				$('.crystal__figure span').html(elements[i]);
			}, time);

			time += delta;

		}

	}
		
	var interval = self.setInterval(function(){LoopForever()},5000);

});
