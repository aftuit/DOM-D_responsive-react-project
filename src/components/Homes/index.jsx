import React from 'react';
import "../../index.css"
import "./style.css"
import Card from './Card'
const Homes = () => {
    return (
        <div className="Home-pages">
            <p className="font-regular">
                <b>Оказываем  услуги комплексно</b> <br />
                совмещая отдельные виды работ
            </p>

            <div className="context">
                <div className="card-wrapper">
                    <Card title="Каркасные дома" image="/assets/images/img-1.png" />
                    <Card title="Дома из клеёного бруса" image="/assets/images/img-2.png" />
                    <Card title="Дома из брёвен" image="/assets/images/img-3.png" />
                    <Card title="Фахверковые дома" image="/assets/images/img-4.png" />
                    <Card title="Беседки" image="/assets/images/img-5.png" />
                    <Card title="Ремонт и отделка" image="/assets/images/img-6.png" />

                </div>
            </div>

        </div>
    )

}

export default Homes;