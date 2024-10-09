console.log('good');
const animItems = document.querySelectorAll('._anim-items');
window.onload = function() {
	const prel = document.querySelector('.preloader__cont');
	prel.classList.add('remove');
	prel.parentElement.classList.add('remove');
	document.body.classList.add('activeScroll');
}

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

let logo = document.getElementsByClassName('fil__logo');
for (let i = 0; i < logo.length; i++) {
    logo[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('active');
    })
}

const container = document.querySelector('.fil__content')

container.addEventListener('click', function(e) {
	const items = document.querySelectorAll('.fil__ind')
	const target = e.target
  Array.from(items).forEach(item => {
  	item.classList.remove('active')
  })
  target.classList.add('active')
})

const filters__block = document.querySelectorAll('.books__info');

document.querySelector('.fil__content').addEventListener('click', event=> {
	if (event.target.tagName !== 'DIV') return false;
	let filterClass = event.target.dataset['f'];
	filters__block.forEach(elem => {
		elem.classList.remove('hide')
		if (!elem.classList.contains(filterClass) && filterClass!== 'None') {
			elem.classList.add('hide')
		}
	});
});

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
}

const elements = document.querySelectorAll('.links__li');

function toggleOpen() {
    this.classList.toggle('active');
    elements.forEach(ele => {
        if (ele !== this) ele.classList.remove('active');
    });
}

elements.forEach(ele => ele.addEventListener('click', toggleOpen));


const menuIcon = document.querySelector('.menu__icon')
if (menuIcon) {
	const menuCont = document.querySelector('.links__cont');
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active');
		menuCont.classList.toggle('active');
		document.body.classList.toggle('activeScroll');
	});
}