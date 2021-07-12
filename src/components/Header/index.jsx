import React, { useState } from 'react'
import '../../index.css'
import './style.css'
const Navbar = () => {

    const [cardBox, setCardBox] = useState(0);

    const [isOpen1, setisOpen1] = useState(false);
    const [isOpen2, setisOpen2] = useState(false);
    const [isOpen3, setisOpen3] = useState(false);
    const [isOpen4, setisOpen4] = useState(false);
    const [isOpen5, setisOpen5] = useState(false);

    const setNav = () => {
        setCardBox(value => value = 0)
        setisOpen1(false);
        setisOpen2(false);
        setisOpen3(false);
        setisOpen4(false);
        setisOpen5(false);

    }

    return (
        <div>

            <div className="card-box" style={{ width: `${cardBox}%` }}>
                <div className="box-top">
                    <img src="/assets/icons/close.svg" alt="" onClick={() => setNav()} />
                    <p>DoM-D</p>
                </div>
                <div className="steps">
                    <div className="step-1">
                        <h5 className="font-bold" onClick={()=>setisOpen1(!isOpen1)}>Виды строительства</h5>
                        <ul style={{display: `${isOpen1? 'block' : 'none'}`}}>
                            <li><a href="/" className="font-regular ">- Каркасные дома </a></li>
                            <li><a href="/" className="font-regular ">- Дома из клеёного бруса </a></li>
                            <li><a href="/" className="font-regular ">- Фахверковые дома </a></li>
                            <li><a href="/" className="font-regular ">- Дома из брёвен </a></li>
                            <li><a href="/" className="font-regular ">- Беседки </a></li>
                            <li><a href="/" className="font-regular ">- Ремонт и отделка </a></li>
                        </ul>
                    </div>

                    <div className="step-2">
                        <h5 className="font-bold" onClick={()=>setisOpen2(!isOpen2)}>Наши работы</h5>
                        <ul style={{display: `${isOpen2? 'block' : 'none'}`}}>
                            <li><a href="/">- Каркасные дома </a></li>
                            <li><a href="/">- Дома из брёвен </a></li>
                            <li><a href="/">- Беседки </a></li>
                            <li><a href="/">- Ремонт и отделка </a></li>
                        </ul>
                    </div>

                    <div className="step-3">
                        <h5 className="font-bold" onClick={()=>setisOpen3(!isOpen3)}>Отзывы клиентов</h5>
                        <ul style={{display: `${isOpen3? 'block' : 'none'}`}}>
                            <li><a href="/">- Дома из брёвен </a></li>
                            <li><a href="/">- Беседки </a></li>
                            <li><a href="/">- Ремонт и отделка </a></li>
                        </ul>
                    </div>

                    <div className="step-4">
                        <h5 className="font-bold" onClick={()=>setisOpen4(!isOpen4)}>Партнеры</h5>
                        <ul style={{display: `${isOpen4? 'block' : 'none'}`}}>
                            <li><a href="/">- Каркасные дома </a></li>
                            <li><a href="/">- Дома из клеёного бруса </a></li>
                            <li><a href="/">- Фахверковые дома </a></li>
                            <li><a href="/">- Дома из брёвен </a></li>
                        </ul>
                    </div>
                    <div className="step-5">
                        <h5 className="font-bold" onClick={()=>setisOpen5(!isOpen5)}>Контакты</h5>
                        <ul style={{display: `${isOpen5? 'block' : 'none'}`}}>
                            <li><a href="/">- Каркасные дома </a></li>
                            <li><a href="/">- Ремонт и отделка </a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="container">
                <img src="/assets/icons/burger.svg" alt="burger" onClick={() => setCardBox(70)} />

                <div className="logo-wrapper">
                    <img src="assets/icons/logo.svg" alt="logo" />
                    <div className="itm">
                        <p className="font-regular">Строительство деревянных домов</p>
                        <p className="text-bold">за <span className="text-main">45</span> дней</p>
                    </div>
                </div>

                <div className="calls-wrap">
                    <div className="local-net">
                        <p className="text-main font-regular">Нажмите, чтобы начать общение</p>
                        <div className="buttons">
                            <a href="/"><img src="assets/icons/viber.svg" alt="" /></a>
                            <a href="/"><img src="assets/icons/telegram.svg" alt="" /></a>
                            <button type="button" className="viber">
                                <img src="assets/icons/viber.svg" alt="viber" />
                                <span>Viber</span>
                            </button>
                            <button type="button" className="telegram">
                                <img src="assets/icons/telegram.svg" alt="telegram" />
                                <span>Telegram</span>
                            </button>
                        </div>
                    </div>
                    <div className="call">
                        <div className="call-number">
                            <img src="/assets/icons/tel.svg" alt="tel" />
                            <span className="text-bold">+38 (098) 271-50-35</span>
                        </div>
                        <button type="button" className="bg__gold font-regular"><span>ПЕРЕЗВОНИТЬ МНЕ</span></button>
                    </div>

                </div>
                <a href={"#"} className="up-to-arrow"><img src="/assets/icons/up-arrow.svg" alt="" /></a>

            </nav>

            <div className="wrapper">

                <div className="left-content">
                    <div className="text-pre">
                        <h1 className="font-bold">Сделаем ваш <span className="text-main">Дом</span></h1>
                        <p className="font-regular">готовым к комфортному проживанию</p>
                    </div>
                    <span className="font-regular span1">Строительство деревянных домов «под ключ»: коттеджи, беседки, бани, дома из клееного бруса</span>

                    <div className="suggestions ">
                        <div className='sugg--work font-medium'>Демонтаж</div>
                        <div className='sugg--work font-medium'>Бетонные работы</div>
                        <div className='sugg--work font-medium'>Возведение стен</div>
                        <div className='sugg--work font-medium'>Кровельные работы</div>
                        <div className='sugg--work font-medium'>Отделка фасадов</div>
                        <div className='sugg--work font-medium'>Инженерные работы</div>

                    </div>

                    <button type="button" className="bg__gold">Заказать расчет</button>

                </div>

                <div className="right-content">
                    <h1 className="font-bold">Заказать расчет</h1>
                    <p className="font-regular">Оказываем  услуги комплексно, совмещая отдельные виды работ</p>

                    <img src="/assets/images/preview.png" alt="preview" />

                    <button type="button" className="bg__gold">Заказать расчет</button>
                </div>
            </div>

        </div>

    )
}
export default Navbar;