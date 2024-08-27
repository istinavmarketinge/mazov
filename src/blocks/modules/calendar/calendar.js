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
            },
            dateFormat: (date) => {
                console.log(date);
                return date.toLocaleString('ru', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });
            },
            onSelect: ({date, formattedDate, datepicker}) => {
                if (!formattedDate) return;
                document.location.href = `sort_${formattedDate.split('.').reverse().join('-')}.html`
            }
                
        }
    }
    initDatepicker() {
        if (!document.querySelectorAll('.calendar')) return;
        document.querySelectorAll('.calendar').forEach((calendar) => {
            this.instance = new AirDatepicker(calendar, this.options)
        });
    }
    init() {
        this.initDatepicker();
    }
}
export default Calendar;