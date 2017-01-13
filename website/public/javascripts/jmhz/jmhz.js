(function() {

	btns = $(".btn-jmhz-nav");
	btnProperty = $(".btn-property");
	btnMerchant = $(".btn-merchant");
	pageProperty = $(".show-property");
	pageMerchant = $(".show-merchant");

	pageMerchant.hide();

	btnProperty.click(function() {
		btns.removeClass("btn-active");
		$(this).addClass("btn-active");
		pageMerchant.hide();
		pageProperty.show();
	});

	btnMerchant.click(function() {
		btns.removeClass("btn-active");
		$(this).addClass("btn-active");
		pageProperty.hide();
		pageMerchant.show();
	});

})();