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
const clickMenu = document.querySelector('.click');
clickMenu.addEventListener('click', function(e){
    const clickArrow = document.querySelector('.arrow');
    const clickList = document.querySelector('.links__subList');
    clickArrow.classList.toggle('active');
    clickList.classList.toggle('active');
});
const menuIcon = document.querySelector('.menu__icon')
if (menuIcon) {
	const menuCont = document.querySelector('.header__menu');
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active');
		menuCont.classList.toggle('active');
		document.body.classList.toggle('activeScroll');
	});
};