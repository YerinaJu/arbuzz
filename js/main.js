(function(global, $){
	'use strict';

	//scroll magic

	// controller 객체 초기화 설정
	var ctrl = new ScrollMagic.Controller();


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