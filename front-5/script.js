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
new Swiper ('.offers__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    navigation: {
		nextEl: '.slider__next',
		prevEl: '.slider__prev',
	},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1400: {
            slidesPerView: 4,
            slidesPerGroup: 3,
        },
        1700: {
            slidesPerView: 5,
            slidesPerGroup: 3,
        },
    }
});