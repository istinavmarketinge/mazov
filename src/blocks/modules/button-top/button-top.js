import $ from "jquery";
const UpButton = class UpButton {
    constructor(selector = ".button-top", speed = 300) {
        this.selector = selector;
        this.speed = speed;
    }
    setClickListener() {
        if (!document.querySelector(this.selector)) return;
        $(this.selector).on("click", () => {
           $("html,body").animate({scrollTop: 0}, this.speed);
        })
    }
    checkScrollDirection() {
        document.addEventListener("wheel", (event) => {
            if (this.checkScrollDirectionIsUp(event) && $(document).scrollTop() > 400) {
                $(this.selector).addClass("isVisible")
             } else {
               $(this.selector).removeClass("isVisible")

             }
        })
    }
    checkScrollDirectionIsUp(event) {
        console.log(event.wheelDelta, event.deltaY);
        if (event.wheelDelta) {
           return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }
    init() {
        this.setClickListener();
        this.checkScrollDirection();
    }
}
export default UpButton;