let navItems = [];

function changeActiveClass() {
	Array.prototype.forEach.call(navItems, item => {
		if (item.classList.contains('active')) {
			item.classList.remove('active');
		}
	});
	this.classList.add('active');
}

function onReady(){
	navItems = document.getElementsByClassName('app__nav-item');
	Array.prototype.forEach.call(navItems, item => {
		item.addEventListener('click', changeActiveClass);
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