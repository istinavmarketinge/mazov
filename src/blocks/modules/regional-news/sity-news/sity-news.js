import 'owl.carousel.es6';
import $ from "jquery";

const CityNews = class CityNews {
    constructor() {}
    initSlider() {
        $('.sity-news-js').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1200:{
                    items:2
                },
                1500:{
                    items:3
                }
            }
        })
    }
    init(){
        this.initSlider();
    }
}
export default CityNews;