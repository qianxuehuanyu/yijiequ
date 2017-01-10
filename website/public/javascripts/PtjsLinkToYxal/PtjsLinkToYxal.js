(function(){
	var list = $(".siteList span");
	console.log(list);

	list.click(function(event) {
		/* Act on the event */
		list.removeClass('now');
		$(this).addClass('now');
	});
})();