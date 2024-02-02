import React from 'react'
import './header.scss'

import Logo from '../../assets/images/MAROON.svg'
import { NavLink } from 'react-router-dom'
import { RiUserFollowFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='header header__container'>
          <div className='header__block'>
              <div className='header__left'>
                  <img src={Logo} alt="logo" />
              </div>
              <div className='header__right'>
                  <NavLink to='/' className='header__link'>Home</NavLink>
                  <NavLink to='/catalog' className='header__link'>Catalog</NavLink>
                  <NavLink to='/details' className='header__link'>Details</NavLink>
                  <RiUserFollowFill className='header__icon' />
                  <FaBagShopping className='header__icon' />
              </div>
          </div>

    </div>
  )
}

export default Header