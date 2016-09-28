(function(global){
	var body = document.body;
	document.onkeydown = function(event){
		if(event === true || event.keyCode === 71 && event.shiftKey){
			body.classList.toggle('grid');
		}
	}
})(this);