(function() {

	function showNewsAticle() {
		var returnedArticle = document.getElementById("returned-article").value;
		var yjqxwAticle = document.getElementById("yjqxw-article-content");
		console.log(yjqxwAticle);
		yjqxwAticle.innerHTML = returnedArticle;
	}

	showNewsAticle();
})();