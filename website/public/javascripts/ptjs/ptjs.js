
(function(){
	var list = $(".style_img3 span");
	console.log(list);
	var content;

	list.click(function(event) {
		/* Act on the event */
		list.removeClass('now');
		$(this).addClass('now');
		content=$(this).html();
		$.post("/PtjsLinkToYxal",{displayCity:content});
	});

})();