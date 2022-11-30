const Sidebar = class Sidebar {
    constructor({ sidebarSelector }) {
        this.sidebarSelector = sidebarSelector;
        this.stopSelector = document.querySelector(this.sidebarSelector).closest('.content').getBoundingClientRect();
        this.bounds = {};
    }
    getSidebarBottomPosition() {
        this.bounds.sidebarclientRect = document.querySelector(this.sidebarSelector).getBoundingClientRect();
        this.bounds.scrollTop = document.documentElement.scrollTop;
        this.bounds.windowHeight = window.innerHeight;
        this.bounds.stopBlockPosition = this.bounds.scrollTop - this.stopSelector.height + this.bounds.windowHeight;
        return this.bounds;
    }
    addWindowScrollHandler() {
        document.addEventListener('scroll', () => {
            const bounds = this.getSidebarBottomPosition();
            this.setBlockPadding(this.getScrolledBoundRemaining(bounds));
        })
    }
    setBlockPadding(padding) {
        if (this.bounds.stopBlockPosition >= 0) return;
        if (Math.round(+padding) > 0) {
            document.querySelector(this.sidebarSelector).style.cssText  = `--translateY: ${Math.round(+padding)}px`;
        } else {
            document.querySelector(this.sidebarSelector).style.cssText  = '--translateY: 0';
        }
    }
    getScrolledBoundRemaining(blockBounds) {
        let result = (blockBounds.sidebarclientRect.height - blockBounds.scrollTop - blockBounds.windowHeight) * -1;
        return result;
    }
    init() {
        if (!document.querySelector(this.sidebarSelector)) return;
        this.addWindowScrollHandler();
    }
}

export default Sidebar;