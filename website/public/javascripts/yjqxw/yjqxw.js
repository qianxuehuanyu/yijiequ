(function() {

	var jsonData = {};
	var classes = [];
	var articles = [];

	$.ajax({
		type: 'GET',
		url: "/data/yjqxw/yjqxw.json",
		dataType: "json",
		success: function(file) {
			jsonData = file;
			classes = file.classes;
			articles = file.articles;
			render();
		},
		error: function() {
			alert(error);
		}
	});

	function renderCategories() {
		var eleNewsCategoryUl = $(".news-category");
		var eleNewsCategoryLi = $(".news-category-item");

		var categoriesHtml = "";
		for(var i=0; i<classes.length; i++) {
			categoriesHtml += "<li class='news-category-item'><a href='#'>"+classes[i]+"</a></li>";
			// var x = classes.length;
			// var liWidth = (1/x)/%
			eleNewsCategoryLi.css("width","50px");

		}
		// var tempHtml = eleNewsCategory.html() + categoriesHtml;
		eleNewsCategory.html(eleNewsCategoryUl.html() + categoriesHtml);
	}

	function renderArticles() {

	}

	function render() {
		renderCategories();
		renderArticles();
	}

})();