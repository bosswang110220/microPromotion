$(function(){
	$(".pic ul li").mouseover(function(){
		$(this).stop(true).animate({width:"790px"},500).siblings().stop(true).animate({width:"100px"},500)
	})
})