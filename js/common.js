window.onload = function(){
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var list = document.querySelectorAll('.list');

	for(var i=0; i<list.length; i++){
		list[i].style.zIndex = list.length-i;
	};

	next.onclick = function(){
		var activeEl = document.querySelector('.active');
		if(activeEl.nextElementSibling){
			activeEl.style.left = '-100%';
			activeEl.classList.remove('active');
			activeEl.nextElementSibling.classList.add('active');
			this.classList.remove('no-active');
			prev.classList.remove('no-active');
			if(!activeEl.nextElementSibling.nextElementSibling){
				this.classList.add('no-active');
			}
		}
	};

	prev.onclick = function(){
		var activeEl = document.querySelector('.active');
		if(activeEl.previousElementSibling){
			activeEl.previousElementSibling.style.left = '0%';
			activeEl.classList.remove('active');
			activeEl.previousElementSibling.classList.add('active');
			this.classList.remove('no-active');
			next.classList.remove('no-active');
			if(!activeEl.previousElementSibling.previousElementSibling){
				this.classList.add('no-active');
			}
		}
	};

 

};