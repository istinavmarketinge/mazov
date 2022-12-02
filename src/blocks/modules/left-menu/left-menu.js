const LeftMenu = class LeftMenu {
    constructor() {}
    addMenuToggleHandler() {
        if (!document.querySelector('.menu-list__item-more')) return;

        document.querySelector('.menu-list__item-more').addEventListener('click', (event) => {
			event.target.classList.toggle("isOpened");
			event.target.closest(".menu-list-glavnaya").querySelector('.menu-list').classList.toggle('isOpened');
			console.log(event);
		});
    }
    init() {
        this.addMenuToggleHandler();
    }
}

export default LeftMenu;