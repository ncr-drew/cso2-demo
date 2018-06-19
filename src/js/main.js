let navItems = [];

function changeActiveClass() {
	Array.prototype.forEach.call(navItems, item => {
		if (item.classList.contains('active')) {
			item.classList.remove('active');
		}
	});
	this.classList.add('active');
}

function increaseQuantity() {
	const siblings = this.parentElement.children;
	Array.prototype.forEach.call(siblings, el => {
		if ( el.classList.contains('cart__item-minus') && el.classList.contains('circle--disabled') ) {
			el.classList.remove('circle--disabled');
		} else if ( el.classList.contains('cart__item-quantity') ) {
			let value = parseInt( el.textContent );
			value++;
			el.textContent = value;
		}
	});
}

function decreaseQuantity() {
	let button = this;
	if ( ! button.classList.contains('circle--disabled') ) {
		const siblings = this.parentElement.children;
		Array.prototype.forEach.call(siblings, el => {
			if ( el.classList.contains('cart__item-quantity') ) {
				let value = parseInt( el.textContent );
				if( value > 1 ) {
					value--;
				}

				if( value < 2 ) {
					button.classList.add('circle--disabled');
				}
				
				el.textContent = value;
			}
		});
	}
}

function onReady(){
	navItems = document.getElementsByClassName('app__nav-item');
	Array.prototype.forEach.call(navItems, item => {
		item.addEventListener('click', changeActiveClass);
	});

	let incrementButtons = document.getElementsByClassName('cart__item-plus');
	Array.prototype.forEach.call(incrementButtons, btn => {
		btn.addEventListener('click', increaseQuantity);
	});

	let decrementButtons = document.getElementsByClassName('cart__item-minus');
	Array.prototype.forEach.call(decrementButtons, btn => {
		btn.addEventListener('click', decreaseQuantity);
	});
};
  
if (
	document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)
) {
	onReady();
} else {
	document.addEventListener("DOMContentLoaded", onReady);
}