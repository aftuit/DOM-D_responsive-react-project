import React from 'react';

import "./style.css"

import Rooms from './Rooms';
const Room = () => {
    return( 
    <div className="room-content">
        <p className="font-regular "><b>Посмотрите на готовые дома</b> с комплексом
                отделки и прокладки коммуникаций. </p>

        <div className="room-styles">
            <Rooms img="/assets/images/image-1.png" />
            <Rooms img="/assets/images/image-2.png" />
            <Rooms img="/assets/images/image-3.png" />
            <Rooms img="/assets/images/image-4.png" />
            <Rooms img="/assets/images/image-5.png" />
            <Rooms img="/assets/images/image-6.png" />
        </div>

    </div>
    )
}


export default Room