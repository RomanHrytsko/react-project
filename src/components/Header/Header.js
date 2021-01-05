import React from "react";

export const Header = () =>{
    return(
        <div>
            <header>

            <div className='header-topLine'>
                <div className={'navbar1 d-flex'}>
                <button>(044) 537-02-22</button>

                <ul className='d-flex topLine-ul'>
                    <li>Контакты</li>
                    <li>Помощь</li>
                    <li>Наш ответ COVID-19</li>

                </ul>
                </div>
                <div className={'navbar2 d-flex '}>
                    <ul className='d-flex topLine-ul'>
                        <li>Ru</li>
                        <li>/</li>
                        <li>UA</li>
                    </ul>
                    <button>Львов</button>
                    <span>Здравствуйте,</span>
                    <button>войдите в личный кабинет</button>

                </div>
            </div>
            </header>
        </div>
    )
}