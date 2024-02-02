import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <div className='nav nav__container'>
        <div className='nav__block'>
            <div>
                <h1 className='nav__title'>Каталог</h1>
            </div>
            <div>
                <button className='nav__btn'>Фильтр</button>
            </div>
        </div>
    </div>
  )
}

export default Nav