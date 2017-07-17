;
//$(function() {
//	$('.uitem').hide();
//	$('.litem>a').toggle(function() {
//		$(this).next().slideDown();
//		var index = $(".uitem").index($(this).next());
//		$(".uitem").not(":eq(" + index + ")").slideUp();
//	}, function() {
//		$(this).next().slideUp();
//		var index = $(".uitem").index($(this).next());//获取点击的下标值
//		$(".uitem").not(":eq(" + index + ")").slideUp();
//	});
//});

$(function() {
	$('.uitem').hide();
	$('.litem>a').toggle(function() {
		$(this).next().slideDown();
//		var index = $(".uitem").index($(this).next());
//		$(".uitem").not(":eq(" + index + ")").slideUp();
		$(this).text($(this).text().replace('+', '-'));
	}, function() {
		$(this).next().slideUp();
		$(this).text($(this).text().replace('-', '+'));
//		var index = $(".uitem").index($(this).next());
//		$(".uitem").not(":eq(" + index + ")").slideUp();
		

	});
});