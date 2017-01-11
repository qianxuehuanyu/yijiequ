(function(){
	var list = $(".siteList span");
	var nowSpan = $(".siteList .now_span");
	console.log(list);

	for (var i = 0; i < list.length; i++) {
		console.log(typeof list[i].innerHTML);
		console.log(typeof nowSpan.val());
		if (list[i].innerHTML==nowSpan.val()) {
			// list[i].addClass('now');
			console.log(1111);
		}else{
			console.log(2222);
			// console.log(list[i]);
		}
	}

	list.click(function(event) {
		/* Act on the event */
		list.removeClass('now');
		$(this).addClass('now');
	});
})();