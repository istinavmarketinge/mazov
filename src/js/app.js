import $ from 'jquery';
import Calendar from '../blocks/modules/calendar/calendar.js';
import UpButton from '../blocks/modules/button-top/button-top.js';
import LeftMenu from '../blocks/modules/left-menu/left-menu.js';
import Sidebar from '../blocks/components/sidebar/sidebar.js';
import CityNews from '../blocks/modules/regional-news/sity-news/sity-news.js';
window.cityNews = new CityNews();
window.calendar = new Calendar(".calendar");
window.upButton = new UpButton(".button-top");
window.leftMenu = new LeftMenu();
window.leftSidebar = new Sidebar({
    sidebarSelector: '.left-block .sticky_block'
});
window.rightSidebar = new Sidebar({
    sidebarSelector: '.right-block .sticky_block'
});
$(document).ready(() => {
    window.calendar.init();
    window.upButton.init();
    window.leftMenu.init();
    window.cityNews.init();
    if (document.querySelector('.notification-block__close')) {
        console.log( document.querySelector('.notification-block__close'));
        document.querySelector('.notification-block__close').addEventListener('click', (event) =>  {
            event.target.closest('.notification-block').classList.add('close');
            console.log(45454);
        });
    }
    if (document.querySelector('.search-block-form input')) {
        $(".search-block-form input").on("keyup", function() {
            let value = $(this).val();
            console.log(value);
            if(value == "") {
                $(this).closest(".search-block-form").removeClass("isNotEmpty")
            } else {
                $(this).closest(".search-block-form").addClass("isNotEmpty")
            }

        })
    }
    setTimeout(() => {
        window.leftSidebar.init();
        window.rightSidebar.init();
    }, 0);
})


