import React from 'react'
import Section from './Section'

import "./style.css"

const Content = () => {
    return (
        <div className="content-wrap">
            <p className="font-regular ">Заботимся о Вашем <b>спокойствии</b></p>
            <div className="section-wrapper">
                <Section  icn="/assets/icons/icn-1.svg" title="Не поднимаем стоимость" txt="Фиксируем стоимость работ в договоре" />
                <Section  icn="/assets/icons/icn-2.svg" title="Поэтапная оплата" txt="Оплата каждого вида работ разбита на 2 части (50% аванс 50% по завершению)" />
                <Section  icn="/assets/icons/icn-3.svg" title="Соблюдаем сроки" txt="Несем ответственность за соблюдение сроков." />
                <Section  icn="/assets/icons/icn-4.svg" title="Экологичность" txt="Дом строится из натуральных материалов" />
                <Section  icn="/assets/icons/icn-5.svg" title="Самостоятельно" txt="Закупаем и доставляем на объект, качественные материалы и расходники" />
                <Section  icn="/assets/icons/icn-6.svg" title="Проводим уборку" txt="В процессе работ и вывозим мусор после завершения работ. " />
            </div>
        </div>
    )
}

export default Content