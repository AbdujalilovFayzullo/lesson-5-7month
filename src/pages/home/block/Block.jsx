import React from 'react'
import './block.scss'

import Image3 from '../../../assets/images/Image3.png'
import Image4 from '../../../assets/images/Image4.png'
import Image5 from '../../../assets/images/Image5.png'
import Image6 from '../../../assets/images/Image6.png'
import Image7 from '../../../assets/images/Image7.png'
import Image8 from '../../../assets/images/Image8.png'

const Block = () => {
  return (
    <div className='block block__container'>
        <div className='block__block'>
            <div className='block__left'>
                <img src={Image3} alt="image" />
                <img src={Image4} alt="image" />
                <img src={Image5} alt="image" />
                <img src={Image6} alt="image" />
                <img src={Image7} alt="image" />
                <img src={Image8} alt="image" />
            </div>
            <div className='block__right'>
                <h2 className='block__title'>Присоединяйтесь к нам</h2>
                <p className='block__text'>Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p>
                <button className='block__btn'>Подписаться</button>
            </div>
        </div>
    </div>
  )
}

export default Block