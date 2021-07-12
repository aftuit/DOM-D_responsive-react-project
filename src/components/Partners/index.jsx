import React from 'react';
import "./style.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Partners extends React.Component {

    constructor() {
        super()
        this.state = {
            responsive: {
                
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
        }
    }

    render(){
    return (
        <div className="partner-wrap">
            <span className="font-regular">Используем только <b>экологически чистые и профессиональные материалы</b></span>
            <OwlCarousel
                className='owl-theme'
                loop
                items={5}
                responsive = {this.state.responsive}
                margin={5}
                nav
                autoplayTimeout="2000"
                autoplay
                dots={false}
                
            >
                <div className='item'>
                    <img src="/assets/images/remmers.png" alt="" />
                </div>
                <div className='item'>
                    <img src="/assets/images/sadolin.png" alt="" />
                </div>
                <div className='item'>
                    <img src="/assets/images/pinotex.png" alt="" />
                </div>
                <div className='item'>
                    <img src="/assets/images/adler.png" alt="" />
                </div>
                <div className='item'>
                    <img src="/assets/images/sadolin.png" alt="" />
                </div>
            </OwlCarousel>
        </div>
    )
    }
}



export default Partners;