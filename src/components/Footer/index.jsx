import React from 'react';
import "./style.css"
const Footer = () => {
    return (
        <div className="footer">
            <img src="/assets/icons/logo.svg" alt="logo" />

            <div className="footer-content">
          <div className="footer-content-1">
          <ul>
                <h5 className="font-bold">Виды строительства</h5>
                <li><a href="/" className="font-regular ">- Дома из клеёного бруса </a></li>
                <li><a href="/" className="font-regular ">- Фахверковые дома </a></li>
                <li><a href="/" className="font-regular ">- Дома из брёвен </a></li>
                <li><a href="/" className="font-regular ">- Беседки </a></li>
                <li><a href="/" className="font-regular ">- Ремонт и отделка</a></li>
            </ul>

            <div className="nav-links">
                <a href="/" className="font-bold">Наши работы</a>
                <a href="/" className="font-bold">Отзывы клиентов</a>
                <a href="/" className="font-bold">Партнеры</a>
            </div>
          </div>

            <ul className="ul-nav">
                <h5 className="font-bold">Контакты</h5>
                <li>
                    <img src="/assets/icons/map.svg" alt="" />
                    <span>Украина, г. Одесса ул. Комитетская, 24Б</span>
                </li>
                <li>
                    <img src="/assets/icons/message.svg" alt="" />
                    <span>Эл.почта: odessadomd@gmail.com</span>
                </li>
                <li>
                    <img src="/assets/icons/tel.svg" alt="" />
                    <span>+38 (098) 271-50-35</span>
                </li>

                <div className="social-link">
                    <a href="/"> <img src="/assets/icons/facebook.svg" alt="facebook" /></a>
                    <a href="/"> <img src="/assets/icons/instagram.svg" alt="instagram" /></a>
                    <a href="/"> <img src="/assets/icons/youtube.svg" alt="youtube" /></a>
                    <h5 className="font-bold">Свежие видео у нас на канале</h5>
                </div>
            </ul>
            </div>
        </div>
    )
}


export default Footer;