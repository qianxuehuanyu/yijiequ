(function() {

	function showNewsAticle() {
		var returnedArticle = document.getElementById("returned-article").value;
		var yxalAticle = document.getElementById("yxal-article-content");
		// console.log(yjqxwAticle);
		yxalAticle.innerHTML = returnedArticle;
	}

	showNewsAticle();
})();