// JavaScript Document

$(function(){
	// ドロワーナビの開閉
	$(".hamburger").click(function(){
		$(".drawer").toggleClass("show");
		$("header").toggleClass("bgclear");
		$(this).toggleClass("close");
	});
});
