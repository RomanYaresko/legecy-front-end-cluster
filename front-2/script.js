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
const scrollLinks = document.querySelectorAll('.list__link[data-to]');
if (scrollLinks.length > 0) {
    scrollLinks.forEach(scrollLinks => {
        scrollLinks.addEventListener('click', function(e){
            document.body.classList.remove('activeScroll');
            const menuIcon = document.querySelector('.menu__icon');
            const menuCont = document.querySelector('.header__menu');
            menuIcon.classList.remove('active');
		    menuCont.classList.remove('active');
            const scrollLinks = e.target;
            const goTO = document.querySelector(scrollLinks.dataset.to);
            const goToVal = goTO.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                    top: goToVal,
                    behavior: 'smooth'
            });
        });
    });
}
function offset(el) {
	const rect = el.getBoundingClientRect(),
	scrollLeft = window.pagexOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
const menuIcon = document.querySelector('.menu__icon')
if (menuIcon) {
	const menuCont = document.querySelector('.header__menu');
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active');
		menuCont.classList.toggle('active');
		document.body.classList.toggle('activeScroll');
	});
};

const lang = document.querySelector('.header__lang__arrow')
lang.addEventListener('click', function(e){
	const langPre = document.querySelector('.haeder__lang__cont__pre');
	lang.classList.toggle('active');
	langPre.classList.toggle('active');
})

const container = document.querySelector('.feaures__blocks')
container.addEventListener('click', function(e) {
	const target = e.target;
	if (target.classList == 'features__text__more') {
		const more = document.querySelectorAll('.features__text__more')
		Array.from(more).forEach(more => {
			more.previousElementSibling.classList.remove('active')
			more.classList.remove('active')
		})
		target.previousElementSibling.classList.toggle('active')
		target.classList.toggle('active')
	}
})

new Swiper ('.slider__contain', {
    slidesPerView: 1.4,
    loop: true,
    speed: 800,
	centeredSlides: true,
	effect: 'slide',
	autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
	simulateTouch: false,
	navigation: {
		nextEl: '.slider__next',
		prevEl: '.slider__prev',
	}
});

const select__arrow = document.querySelector('.select__arrow');
const selext__all = document.querySelector('.select')
selext__all.addEventListener('click', function(e){
	const select__body = document.querySelector('.select__body');
	select__body.classList.toggle('active');
	select__body.parentElement.classList.toggle('active');
	select__arrow.classList.toggle('active');
})

const selct__item = document.querySelectorAll('.select__item');
	selct__item.forEach(item => {
		item.addEventListener('click', function(e){
			currentText = this.closest('.select').querySelector('.select__current')
			let text = this.innerText;
			currentText.innerText = text
		});
	});