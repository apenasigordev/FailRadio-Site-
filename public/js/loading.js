setTimeout(() => {
	const element = document.querySelector('.loading');
	const home = document.querySelector('.home')
element.classList.add('animate__animated', 'animate__fadeOutUpBig');

element.addEventListener('animationend', () => {
  // do something
	element.classList.remove('animate__animated', 'animate__fadeOutUpBig');
	element.style.display = "none";
	
});
}, Math.floor(Math.random() * 5000));