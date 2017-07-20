//购物车
$(".header .header_top .top_nav .menu2 p>a>span").hover(function(){
		$(".header .header_top .top_nav .menu2 .p_gwc").stop().fadeIn();
	},function(){
		$(".header .header_top .top_nav .menu2 .p_gwc").stop().fadeOut();
})
//轮播
$(".menu3 li").hover(function(){
	$('.menu3 li').removeClass('active');
	$('.menu2 li').stop().animate({opacity:0,zIndex:0});
	$(this).addClass('active');
	$('.menu2 li').eq($(this).index()).stop().animate({opacity:1,zIndex:1});
})
