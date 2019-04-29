$(() => {
	$(window).on('resize', () => {
		let windowSize = $(window).width() + 'px by ' + $(window).height() + 'px';
		$('#result').text(windowSize);
	});
});

// clock function
$(function() {
	function Clock() {
		var theDate = new Date();
		var t = theDate.getHours() + ':' + theDate.getMinutes() + ':' + theDate.getSeconds();
		$('#time').text(t);	
	}
	setInterval(Clock, 1000);
});



