import React from 'react'

const Card = (props) => {
    return (
        <div className="home-card">
            <div className="circle"></div>
            <div className="title-i">
                <h1 className="font-bold">{props.title}</h1>
                <button type="button">Подробнее -</button>
            </div>

            <img src={props.image} alt="" />
        </div>
    )
}

export default Card;