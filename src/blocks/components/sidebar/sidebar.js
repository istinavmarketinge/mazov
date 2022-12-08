import $ from 'jquery';

const Sidebar = class Sidebar {
    constructor({ sidebarSelector }) {
        this.sidebarSelector = sidebarSelector;
        this.height = 0;
        this.windowHeight = 0;
    }
    getBlockTop() {
        this.height = $(this.sidebarSelector).innerHeight();
        this.windowHeight = window.innerHeight;
        document.querySelector(this.sidebarSelector).style.cssText  = `--top: -${+this.height - +this.windowHeight}px`;
    }
    init() {
        if (!document.querySelector(this.sidebarSelector)) return;
        this.getBlockTop();
        window.addEventListener('resize', () => {
            this.getBlockTop();
        })
    }
}

export default Sidebar;