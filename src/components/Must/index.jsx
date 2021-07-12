import React from 'react'
import "./style.css"
const Must = () => {
    return(
        <div className="must-content">
           <div className="fifteen">
           <div className="must-wrap">
                <span>15</span>
                <p className="font-regular">лет опытав стоительстве</p>
            </div>

            <div className="must-wrap">
                <span>15</span>
                <p className="font-regular">специалистов в штате</p>
            </div>

            <div className="must-wrap">
                <span>53</span>
                <p className="font-regular">построенных домов</p>
            </div>
           </div>

            <div className="must-wrap youtube">
                <img src="/assets/icons/youtube.svg" alt="youtube" />
                <p className="font-regular">Наши ВИДЕО об отделке и устройстве смотрите на канале DOM-D</p>
            </div>
        </div>
    )
}

export default Must