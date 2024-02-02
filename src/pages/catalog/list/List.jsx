import React from 'react'
import './list.scss'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const List = () => {
  return (
    <div className='list'>
            <h1 className='list__title'>Вы недавно смотрели</h1>
        <div className='list__block'>
        <div className='card__boxx'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
            <div className='card__boxx'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
            <div className='card__boxx'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
            <div className='card__boxx'>
                <h3 className='card__box_title'>High</h3>
                <p className='card__box_text'>крем для лица</p>
                <p className='card__box_desc'>Подробнее</p>
            </div>
        </div>
        <div className='wrapper__icons'>
        <FaArrowLeft className='wrapper__icon'/>
        <FaArrowRight className='wrapper__icon'/>
        </div>
    </div>
  )
}

export default List