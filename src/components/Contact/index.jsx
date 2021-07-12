import React from 'react';
import "./style.css"
const Contact = () => {
    return (
        <div className="contact-wrapper">
            <h1 className="font-bold">Наши контакты</h1>

            <div className="contact-wrap">
                <div className="contact-left-card">
                    <h1 className="font-bold">Задать вопрос</h1>
                    <p className="font-regular ">Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее время!</p>

                        <textarea placeholder="Ваш вопросы" className="font-regular "></textarea>
                            <br />
                        <input type="text" placeholder="Телефон" className="font-regular " />
                            <br />
                        <button type="submit" className="bg__gold">Отправить вопрос</button>
                </div>

                <div className="contact-right-card">
                    <h1 className="font-bold">Мы на связи</h1>

                    <div className="location">
                        <img src="/assets/icons/map.svg" alt="" />
                        <span className="font-regular ">Украина, г. Одесса ул. Комитетская, 24Б </span>
                    </div>

                    <div className="location">
                        <img src="/assets/icons/message.svg" alt="" />
                        <span className="font-regular ">Эл.почта: odessadomd@gmail.com</span>
                    </div>

                    <div className="buttons btn">
                        <button type="button" className="viber">
                            <img src="assets/icons/viber.svg" alt="viber" />
                            <span>Viber</span>
                        </button>
                        <button type="button" className="telegram">
                            <img src="assets/icons/telegram.svg" alt="telegram" />
                            <span>Telegram</span>
                        </button>
                    </div>

                    <div className="location">
                        <img src="/assets/icons/tel.svg" alt="" />
                        <div className="phone">
                            <h2>+38 (098) 271-50-35 </h2>
                            <span className="text-main">Мы на связи</span>
                        </div>
                    </div>

                    <button type="button" className="bg__gold">ПЕРЕЗВОНИТЬ МНЕ</button>

                </div>
            </div>


        </div>
    )
}



export default Contact;