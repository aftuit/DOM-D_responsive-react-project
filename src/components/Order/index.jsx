import React from 'react';

import "./style.css"
// import movie from "/assets/videos/Real_Estate_Video.mp4"

const Order = () => {
    return (
        <div className="order">
            <h1 className="font-bold">Приступим cегодня</h1>
            <p className="font-regular">Напишите нам, чтобы получить персональное предложение</p>


            <div className="order-content">
                <div className="left-contents">
                    <h2 className="text-main font-bold">Cтроительство дома,
                        не покажешь картинкой</h2>

                        <p className="font-regular">
                        За каждым домом стоит целая история, смотри полезные  презентации у нас на канале. 
                        </p>

                        <button type="button" className="bg__gold">Заказать расчет</button>
                </div>

                <div className="right-contents">
                    <video src="/assets/videos/Real_Estate_Video.mp4" controls> </video>
                </div>
            </div>
        </div>


    )

}

export default Order;