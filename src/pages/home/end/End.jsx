import React from 'react'
import './end.scss'

import Image from '../../../assets/images/Image9.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const End = () => {
  return (
    <div className='end'>
            <div className='box__block'>
            <div className='box__left'>
                <h2 className='box__title'>Контакты</h2>
                <p className='box__text'>Адрес</p>
                <p className='box__text'>Санкт-Петербург, ул. Большая Конюшенная, 19</p>
                <p className='end__text'>Телефон</p>
                <p className='end__text'>+7 (923) 888-90-60</p>
                <p className='end__text'>E-mail</p>
                <p className='end__text'>info@maroon.ru</p>
                <div className='end__icons'>
                <FaFacebook className='footer__icon' />
                  <FaInstagram className='footer__icon' />
                  <FaTwitterSquare className='footer__icon' />
                </div>
            </div>
            <div className='box__right'>
                <img src={Image} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default End