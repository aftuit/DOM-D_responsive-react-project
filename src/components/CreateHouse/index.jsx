import React from "react"
import "./style.css"
const Create = () => {
    return (
        <div className="create-House">
            <button type="button" className="bg__gold">Смотреть все</button>

            <p className="font-regular"> Готовы <b>начать строить дом</b>с надежной компанией? </p>

            <div className="content-box">
                <div className="img-wrap">
                    <img src="/assets/images/person.png" alt="person" />
                    <img src="/assets/images/person-short.png" alt="person-short" />
                    <p className="font-regular "><b>Здравствуйте, меня зовут Ярослав  Доля.</b>  Я руководитель компании <b>DOM-D</b></p>
                </div>
                <div className="box-wrapper">
                    <div className="box-wrap">
                        <img src="/assets/icons/union.svg" alt="union" />
                        <p className="font-regular ">Мы не просто <b>предоставляем</b> услуги мы отвечаем
                            за весь комплекс работ от проектирования до
                            гарантийного обслуживания. </p>
                    </div>

                    <div className="box-wrap">
                        <img src="/assets/icons/union.svg" alt="union" />

                        <p className="font-regular "> Вы не <b>рискуете</b> своими деньгами, нервами и
                            временем. Мы берем на себя полную материальную ответственность
                            по договору за дом, работы, сроки выполнения каждого этапа работы </p>
                    </div>

                    <div className="box-wrap">
                        <img src="/assets/icons/union.svg" alt="union" />

                        <p className="font-regular ">Наша команда стремится к полной <b>прозрачности</b> в работе,
                            поэтому мы с удовольствием показываем каждый процесс
                            строительства, без прикрас. </p>
                    </div>

                    <div className="box-wrap">
                        <img src="/assets/icons/union.svg" alt="union" />

                        <p className="font-regular ">Мы <b>гарантируем</b> Ваше минимальное вовлечение в рутину
                            строительства, беря на себя весь комплекс
                            строительных работ </p>
                    </div>

                    <div className="box-wrap">
                        <img src="/assets/icons/union.svg" alt="union" />

                        <p className="font-regular "><b>Мы знаем</b> все о строительстве
                            деревянных  строительных работах</p>
                    </div>

                    <div className="box-wrap">
                        <img src="/assets/icons/union.svg" alt="union" />

                        <p className="font-regular "> <b>Проектируем</b> и строим авторские дома из
                            дерева и клееного бруса </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;