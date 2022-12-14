const MobileMenu = class MobileMenu {
    constructor() {}
    addMobileMenuToggleHandler() {
        if (!document.querySelector('.menu-burger')) return;

            document.querySelector('#open-form').addEventListener('click', () => {
                document.querySelector('.mobile-menu').classList.add('open');
            });
    
            document.querySelector('#close').addEventListener('click', () => {
                document.querySelector('.mobile-menu').classList.remove('open');
            });
        }
    
    init() {
        this.addMobileMenuToggleHandler();
    }
}

export default MobileMenu;