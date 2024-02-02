import React from 'react'
import './footer.scss'

import Logo from '../../assets/images/MAROON.svg'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer footer__container'>
          <div className='footer__block'>
              <div className='footer__left'>
                  <img src={Logo} alt="logo" />
                  <NavLink to='/' className='footer__link'>Home</NavLink>
                  <NavLink to='/catalog' className='footer__link'>Catalog</NavLink>
                  <NavLink to='/details' className='footer__link'>Details</NavLink>
              </div>
              <div className='footer__right'>
                  <FaFacebook className='footer__icon' />
                  <FaInstagram className='footer__icon' />
                  <FaTwitterSquare className='footer__icon' />
              </div>
          </div>
    </div>
  )
}

export default Footer