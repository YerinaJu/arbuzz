(function(global, $){
	'use strict';

	//scroll magic

	// controller 객체 초기화 설정
	var ctrl = new ScrollMagic.Controller();


	//carouselScene 설정
	/*var carouselScene = new ScrollMagic.Scene({
		'triggerElement': '.main-carousel',
		'triggerHook': 0,
		'duration': 500
	})
	.setClassToggle('.main-carousel', 'fade-in')
	.addTo(ctrl) // scene에 controller 연결 
	.addIndicators({
		'name':'carousel',
		'colorStart':'red',
		'colorEnd': 'red'
	});
	carouselScene.setPin('.main-carousel',{'pushFollowers':false});*/


	var sceneList = '.banner-wrapper, .banner, .tabs, .product-wrapper, .products-item, h2, .about-us, .from-the-blog, .blog-items, .footer'.split(', ');

	sceneList.forEach(function(element, index){
		var scene = new ScrollMagic.Scene({
			'triggerElement': element,
			'triggerHook':0,
			'offset': -400
		})
		.setClassToggle(element,'fade-in')
		.addTo(ctrl)
	});

})(this, this.jQuery); 