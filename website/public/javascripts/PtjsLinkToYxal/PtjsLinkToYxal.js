(function(){
	var list = $(".siteList span");
	// var nowSpan = $(".siteList .now_span");
	console.log(list);

	// for (var i = 0; i < list.length; i++) {
	// 	if (String(list[i].innerHTML)==String(nowSpan.val())) {
	// 		console.log(1111);
	// 	}else{
	// 		console.log(2222);
	// 	}
	// }

	list.click(function(event) {
		/* Act on the event */
		list.removeClass('now');
		$(this).addClass('now');
	});
})();