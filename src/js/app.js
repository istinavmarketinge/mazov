import * as globalFunctions from './modules/functions.js';
// globalFunctions.isWebp();

import $ from 'jquery';


import Calendar from '../blocks/modules/calendar/calendar.js';
import UpButton from '../blocks/modules/button-top/button-top.js';



window.calendar = new Calendar(".calendar");
window.upButton = new UpButton(".button-top");



$(document).ready(() => {
    // window.calendar.options = {
    //     navTitles: {
    //         days: 'MMMM <p>yyyy</p>',
    //         months: 'yyyy',
    //         years: 'yyyy1 - yyyy2',
    //     }, 
    //     onSelect: ({date, formattedDate, datepicker}) => {
    //             console.log(4237);
    //         }
    // }
    window.calendar.init();
    window.upButton.init();

    // TODO написать в Readme.md о возможности изменять опции календаря
})
