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

    if (document.querySelector('.menu-list__item-more')) {
		document.querySelector('.menu-list__item-more').addEventListener('click', (event) => {
			// document.querySelector('table.table-tarify').classList.toggle('isOpened');
			event.target.classList.toggle("isOpened");
			event.target.closest(".menu-list-glavnaya").querySelector('.menu-list').classList.toggle('isOpened');
			console.log(event);
		});
	}
    if (document.querySelector('.notification-block__close')) {
        console.log( document.querySelector('.notification-block__close'));
        document.querySelector('.notification-block__close').addEventListener('click', (event) =>  {
            event.target.closest('.notification-block').classList.add('close');
            console.log(45454);
        });
    }

    // if (document.querySelector('.comments-all-btn')) {
	// 	document.querySelector('.comments-all-btn').addEventListener('click', (event) => {
	// 		// document.querySelector('table.table-tarify').classList.toggle('isOpened');
	// 		event.target.classList.toggle("isOpen");
	// 		event.target.closest(".comments-block__in").querySelector('.comments-personal').classList.toggle('isOpen');
	// 		console.log(event);
	// 	});
	// }

    // TODO написать в Readme.md о возможности изменять опции календаря
})


