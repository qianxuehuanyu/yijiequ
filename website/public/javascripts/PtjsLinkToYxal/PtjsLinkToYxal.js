(function(){
	var list = $(".siteList a");
	console.log(list);

	list.click(function(event) {
		/* Act on the event */
		list.removeClass('now');
		$(this).addClass('now');
	});
})();