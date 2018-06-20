let navItems = [];
let removeButtons = [];

function changeActiveClass() {
	Array.prototype.forEach.call( navItems, item => {
		if ( item.classList.contains( 'active' ) ) {
			item.classList.remove( 'active' );
		}
	} );
	this.classList.add( 'active' );
}

function increaseQuantity() {
	const siblings = this.parentElement.children;
	Array.prototype.forEach.call( siblings, el => {
		if ( el.classList.contains( 'cart__item-minus' ) && el.classList.contains( 'circle--disabled' ) ) {
			el.classList.remove( 'circle--disabled' );
		} else if ( el.classList.contains( 'cart__item-quantity' ) ) {
			let value = parseInt( el.textContent );
			value++;
			el.textContent = value;
		}
	});
}

function decreaseQuantity() {
	let button = this;
	if ( ! button.classList.contains( 'circle--disabled' ) ) {
		const siblings = this.parentElement.children;
		Array.prototype.forEach.call( siblings, el => {
			if ( el.classList.contains( 'cart__item-quantity' ) ) {
				let value = parseInt( el.textContent );
				if ( value > 1 ) {
					value--;
				}

				if ( value < 2 ) {
					button.classList.add( 'circle--disabled' );
				}
				
				el.textContent = value;
			}
		});
	}
}

function removeCartItem() {
	const buttons = Array.from( removeButtons );
	const index = buttons.indexOf( this );
	const cartItems = document.getElementsByClassName( 'cart__item' );
	const cartItemActions = document.getElementsByClassName( 'cart__item-actions' );

	cartItems[index].parentNode.removeChild( cartItems[index] );
	cartItemActions[index].parentNode.removeChild( cartItemActions[index] );
}

function openCart() {
	const footer = document.getElementsByClassName( 'app__footer' );
	const overlay = document.getElementsByClassName( 'cart__overlay' );
	if ( footer.length ) {
		footer[0].classList.remove( 'slideOutDown' );
		footer[0].classList.add( ...['animated', 'slideInUp'] );
	}
	if ( overlay.length ) {
		overlay[0].classList.remove('hidden');
	}
}

function closeCart() {
	const footer = document.getElementsByClassName( 'app__footer' );
	const overlay = document.getElementsByClassName( 'cart__overlay' );
	if ( footer.length ) {
		footer[0].classList.remove( 'slideInUp' );
		footer[0].classList.add( 'slideOutDown' );
	}
	if ( overlay.length ) {
		overlay[0].classList.add( 'hidden' );
	}
}

function onReady() {
	// Item menu nav toggle
	navItems = document.getElementsByClassName( 'app__nav-item' );
	if ( navItems.length ) {
		Array.prototype.forEach.call( navItems, item => {
			item.addEventListener( 'click', changeActiveClass );
		});
	}

	// Cart item quantity increment 
	const incrementButtons = document.getElementsByClassName( 'cart__item-plus' );
	if ( incrementButtons.length ) {
		Array.prototype.forEach.call( incrementButtons, btn => {
			btn.addEventListener( 'click', increaseQuantity );
		});
	}

	// Cart item quantity increment
	const decrementButtons = document.getElementsByClassName( 'cart__item-minus' );
	if ( decrementButtons.length ) {
		Array.prototype.forEach.call( decrementButtons, btn => {
			btn.addEventListener( 'click', decreaseQuantity );
		});
	}

	// Remove cart item
	removeButtons = document.getElementsByClassName( 'cart__item-remove' );
	if ( removeButtons.length ) {
		Array.prototype.forEach.call( removeButtons, btn => {
			btn.addEventListener( 'click', removeCartItem );
		});
	}

	// Open cart
	const menuAdd = document.getElementsByClassName( 'menu-item__add' );
	const cartOpen = document.getElementsByClassName( 'app__cart-open' );
	if ( cartOpen.length ) {
		cartOpen[0].addEventListener( 'click', openCart );
	}

	if ( menuAdd.length ) {
		Array.prototype.forEach.call( menuAdd, btn => {
			btn.addEventListener( 'click', openCart );
		});
	}

	// Close cart
	const cartClose = document.getElementsByClassName( 'app__cart-close' );
	if ( cartClose.length ) {
		cartClose[0].addEventListener( 'click', closeCart );
	}
};
  
if (
	document.readyState === 'complete' ||
	( document.readyState !== 'loading' && !document.documentElement.doScroll )
) {
	onReady();
} else {
	document.addEventListener( 'DOMContentLoaded', onReady );
}