import React from 'react'

const Section = (props) => {
    return (
        <div className="section-wrap">
            <img src={props.icn} alt="" /> 

            <div className="section-cont">
                <h4 className="font-bold">{props.title}</h4>
                <p className="font-regular ">{props.txt}</p>
            </div>           
        </div>
    )
}

export default Section