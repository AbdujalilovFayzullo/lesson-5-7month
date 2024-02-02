import React from 'react'
import './box.scss'

import Image from '../../../assets/images/Image2.png'

const Box = () => {
  return (
    <div className='box box__container'>
        <div className='box__block'>
            <div className='box__left'>
                <h2 className='box__title'>Индивидуальный уход</h2>
                <p className='box__text'>Не всегда очевидно, какие элементы и минералы необходимы коже,а многочисленные эксперименты с разными средствами только ухудшают ее качество.Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы. </p>
                <button className='box__btn'>Заполнить анкету</button>
            </div>
            <div className='box__right'>
                <img src={Image} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Box