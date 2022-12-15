import 'owl.carousel.es6';
import $ from "jquery";

const MainNews = class MainNews {
    constructor() {}
    initSlider() {
        $('.main-first-js').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
        $('.big-news-list-item__slider').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
    }
    init(){
        this.initSlider();
    }
}
export default MainNews;