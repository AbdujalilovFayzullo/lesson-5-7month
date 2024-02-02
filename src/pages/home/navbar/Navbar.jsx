import React from 'react'
import './navbar.scss'

import Image from '../../../assets/images/Image1.png'

const Navbar = () => {
  return (
    <div className='navbar navbar__container'>
        <div className='navbar__block'>
            <div className='navbar__left'>
                <img src={Image} alt="image" />
            </div>
            <div className='navbar__center'>
                <h1 className='navbar__title'>MAROON</h1>
                <p className='navbar__text'>Натуральная косметика для бережного ухода за кожей</p>
                <button className='navbar__btn'>Подробнее</button>
            </div>
            <div className='navbar__right'>
                <img src={Image} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Navbar