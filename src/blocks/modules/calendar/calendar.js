import AirDatepicker from 'air-datepicker';
const Calendar = class Calendar {
    constructor(selector) {
        this.selector = selector;
        this.instance = null;
        this.options = {
            navTitles: {
                days: 'MMMM <span>yyyy</span>',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2',
            }
        }
    }
    initDatepicker() {
        if (!document.querySelector(this.selector)) return;
        this.instance = new AirDatepicker(this.selector, this.options)
    }
    init() {
        this.initDatepicker();
        console.log("Календарь инициализирован", this.selector)
    }
}
export default Calendar;