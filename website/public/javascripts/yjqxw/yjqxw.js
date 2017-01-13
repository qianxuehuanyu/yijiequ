(function() {

	var btnChangeNewsCategory = $(".news-category-item");
	var newsItems = $(".news-item");
	var hiddenNewsClassInput = $(".news-item .news-classification");

	btnChangeNewsCategory.click(function() {
		// $(this).find("a")[0].preventDefault();

		btnChangeNewsCategory.removeClass("is-active");
		$(this).addClass("is-active");

		var currentTag =  $(this).find("a").html();

		newsItems.hide();
		for (var i=0; i<newsItems.length; i++) {
			var newsClass = $(newsItems[i]).find("input").val();
			if (newsClass.indexOf(currentTag) != -1) {
				$(newsItems[i]).show();
			}
		}
	});


})();
