$(() => {
	$(window).on('resize', () => {
		let windowSize = $(window).width() + 'px by ' + $(window).height() + 'px';
		$('#result').text(windowSize);
	});
});



