
(function(){
	var list = $(".style_img3 span");
	console.log(list);
	var content;

	list.click(function(event) {
		/* Act on the event */
		list.removeClass('now');
		$(this).addClass('now');


	});

	var list2 = $(".case_site a");
	console.log(list2);

	list2.click(function(event) {
		/* Act on the event */
		content=$(this).html();
		$.post("./PtjsLinkToYxal",{displayCity:content});
	});


})();