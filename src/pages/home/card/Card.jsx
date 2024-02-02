import React from 'react'
import './card.scss'

const Card = () => {
  return (
    <div className='card card__container'>
        <div className='card__block'>
            <div className='card__left'>
                <h2 className='card__title'>Бестселлеры</h2>
                <p className='card__text'>Легендарные продукты, завоевавшие любовь наших клиентов</p>
                <button className='card__btn'>Смотреть все</button>
            </div>
            <div className='card__box'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
            <div className='card__box'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
            <div className='card__box'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
        </div>
    </div>
  )
}

export default Card