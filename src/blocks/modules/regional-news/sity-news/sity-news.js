import 'owl.carousel.es6';
import $ from "jquery";

const CityNews = class CityNews {
    constructor() {}
    initSlider() {
        $('.sity-news-js').owlCarousel({
            loop:true,
            margin:32,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                850:{
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