$(document).ready(function() {
/* Настройка меню бургер*/
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
$('.header__menu').click(function(){
       $('.header__burger, .header__menu').removeClass('active');
       $('body').removeClass('lock');
});
/* Настройка менб бургер END*/
});


/* Параллакс в шапке сайта */
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);
/* Параллакс в шапке сайта END*/


/* Слайдер в секции Фото с мероприятий*/
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// Навигация 
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		type: 'bullets',
		clickable: true,
	},
	
	// Переключение при клике на слайд
	slideToClickedSlide: true,


	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 10,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Бесконечный слайдер
	loop: true,

	// Автопрокрутка
	autoplay: true,
	
	// Скорость
	speed: 400,
});
/* Слайдер в секции Фото с мероприятий END*/


/* Табы в секции Варианты организации праздника*/

const tabsItems = document.getElementById('tabs__items');

const tabsContent = document.querySelectorAll('.tabs__content');

const changeClass = el => {
	for(let i = 0; i < tabsItems.children.length; i++) {
		tabsItems.children[i].classList.remove('active');
	}
	el.classList.add('active');
}

tabsItems.addEventListener('click' , e => {
	const currTab = e.target.dataset.tabsItem;
	changeClass(e.target);

	for(let i = 0; i < tabsContent.length; i++) {
		tabsContent[i].classList.remove('active');
		if(tabsContent[i].dataset.tabsContent === currTab) {
			tabsContent[i].classList.add('active');
		}
	}
})
/* Табы в секции Варианты организации праздника END*/


/* Плавная прокрутка к якорю */
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
/* Плавная прокрутка к якорю END*/