// JavaScript Document

$(function(){
	//ハンバーガークリック時の動き
	$('.hamburger').click (function(){
		$(this).toggleClass('close');
		$('.drawer').toggleClass('show');
	});
	//ナビゲーションクリック時の動き
	$('.drawer ul li a').click(function(){
		$('.hamburger').removeClass('close');
		$('.drawer').removeClass('show');
	});
});