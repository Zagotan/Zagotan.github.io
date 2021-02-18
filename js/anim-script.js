/*Находим и объявляем в переменную все объекты, которые будут анимироваться*/
const animItems = document.querySelectorAll('._anim-items');

/*Проверяем, есть ли такие объекты в массиве*/
if (animItems.length > 0) {
/*Событие, при котором возникает анимация*/
	window.addEventListener('scroll', animOnScroll);
/*Создаём функцию*/
	function animOnScroll() {
/*Создаём цикл*/
		for (let index = 0; index < animItems.length; index++) {
/*Создаём несколько переменных*/
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
/*Положение объекта сверху*/				
			const animItemOffset = offset(animItem).top;
/*Коэффициент регулирования старта анимации*/				
			const animStart = 4;

/*Старт анимации*/	
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				/*anim-no-hide - запрещает анимацию при скролле вверх*/
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

/*Функция нахождения положения объекта относительно верха*/	
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

/*Задержка функции изначальной анимации*/
	setTimeout(() => {
		/*Функция изначальной анимации*/
		animOnScroll();
	}, 300);
}