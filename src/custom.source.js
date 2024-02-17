(function () {
	"use strict";
	
	var video = document.getElementById('video-player'),
		questions = document.getElementById('questions'),
		enterButton = document.getElementById('enter-button');
	
	function videoEndHandler() {
		questions.classList.remove('bl-fadeout');
	}
	
	function videoStartHandler() {
		questions.classList.add('bl-fadeout');
		enterButton.classList.add('dn');
	}
	
	video.addEventListener('play', videoStartHandler, false);
	video.addEventListener('ended', videoEndHandler, false);
	
	enterButton.addEventListener('click', function () {
		video.play();
		enterButton.classList.add('dn');
	});
	
	document.getElementById('questions').querySelectorAll('button').forEach(function (el) {
		el.addEventListener('click', function () {
			var vidSource = this.dataset.video;
			video.querySelector('source').setAttribute('src', vidSource);
			video.load();
		});
	});
})();