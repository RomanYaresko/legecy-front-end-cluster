'use srict'
window.onload = function() {

	const prel = document.querySelector('.preloader__cont');
	prel.classList.add('remove');
	prel.parentElement.classList.add('remove');
	document.body.classList.add('activeScroll');

	const parallax = document.querySelector('.site__full')
	if (parallax){
		const back = document.querySelector('.full__parallax__back');
		const hand = document.querySelector ('.full__parallax__hand');
		const books = document.querySelector ('.full__parallax__books');

		const forBack = 10;
		const forHand = 20;
		const forBooks = 40;

		const speed = 0.5;

		let positionX = 0; let positionY = 0;
		let cordXprocent = 0; let cordYprocent = 0;
		let thresSets = [];
		for (let i = 0; i <= 1.0; i += 0.005) {
			thresSets.push(i);
		}
		const callback = function (entries, observer) {
			const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
			setParallaxitemsStyle(scrollTopProcent);
		};
		const observer = new IntersectionObserver(callback, {
			threshold: thresSets
		});

		observer.observe(document.querySelector('.site__full'));

		function setParallaxitemsStyle(scrollTopProcent) {
			hand.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 10}%);`;
			books.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 2}%);`;
		}

	}
}



console.log('good');
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener ('scroll', animOnScroll);
	function animOnScroll () {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_no-hide')){
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pagexOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);	
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch')
} else {
	document.body.classList.add('_pc')
};

let menuArrows = document.querySelectorAll('.arrow');
if (menuArrows.length > 0) {
	for (let index = 0; index < menuArrows.length; index++) {
		const menuArrow = menuArrows[index];
		menuArrow.addEventListener('click', function(a) {
			menuArrow.parentElement.classList.toggle('active')
			menuArrow.classList.toggle('active')
		});
	}
};

const menuIcon = document.querySelector('.menu__icon')
if (menuIcon) {
	const menuCont = document.querySelector('.links__cont');
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active');
		menuCont.classList.toggle('active');
		document.body.classList.toggle('activeScroll');
	});
};

const form = document.getElementById('form');
form.addEventListener ('submit', formSend);

async function formSend(e){
	e.preventDefault();
	let error = formValidate(form);
	const formWait = document.querySelector('.form__wait');
	let formData = new FormData(form);
	if (error === 0){	
		formWait.classList.add('active');
		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});
		if(response.ok){
		    let result = await response.json();
		    alert (result.message);
			form.reset();
			formWait.classList.remove('active');
		}else{
			alert('ERROR');
			formWait.classList.remove('active');
		}
	}else{

	}
}
	function formValidate(form) {
		let error = 0;
		let forReq = document.querySelectorAll('.req'); 

		for (let index = 0; index < forReq.length; index++) {
			const input = forReq[index];
			formRemoveError(input);
			if (input.classList.contains('email')){
				if (emailTest(input)){
					formAddError(input);
					error++
				}
			}else if (input.getAttribute('type') === 'checkbox' && input.checked === false){
				formAddError(input);
				error++;
			}else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;

	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}
	function emailTest(input) {
		return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
	}
}