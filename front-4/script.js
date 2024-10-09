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

const menuIcon = document.querySelector('.menu__icon')
if (menuIcon) {
	const menuCont = document.querySelector('.list__cont');
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active');
		menuCont.classList.toggle('active');
		document.body.classList.toggle('activeScroll');
	});
};

const clickMenu = document.querySelector('.click');
clickMenu.addEventListener('click', function(e){
    const clickArrow = document.querySelector('.arrow');
    const clickList = document.querySelector('.links__subList');
    clickArrow.classList.toggle('active');
    clickList.classList.toggle('active');
});

new Swiper ('.slider__cont', {
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
        750: {
            slidesPerView: 6,
        },
        550: {
            slidesPerView: 4,
        },
        340: {
            slidesPerView: 3,
        },
    }
});