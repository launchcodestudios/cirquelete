(function () {
	"use strict";
	
	var video = document.getElementById('video-player'),
		questions = document.getElementById('questions'),
		enterButton = document.getElementById('enter-button');
	
	function videoEndHandler () {
		questions.classList.remove('bl-fadeout');
	}
	
	function videoStartHandler () {
		questions.classList.add('bl-fadeout');
		hideIntroButton();
	}
	
	function hideIntroButton () {
		enterButton.parentElement.classList.add('dn');
		enterButton.parentElement.classList.remove('flex');
	}
	
	video.addEventListener('play', videoStartHandler, false);
	video.addEventListener('ended', videoEndHandler, false);
	
	enterButton.addEventListener('click', function () {
		video.play();
		hideIntroButton();
	});
	
	document.getElementById('questions').querySelectorAll('button').forEach(function (el) {
		el.addEventListener('click', function () {
			var vidSource = this.dataset.video;
			video.querySelector('source').setAttribute('src', vidSource);
			video.load();
		});
	});
})();