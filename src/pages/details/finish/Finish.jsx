import React from 'react'
import './finish.scss'
import Image from '../../../assets/images/Image11.png'

const Finish = () => {
  return (
    <div className='finish'>
        <div className="finish__block">
            <div>
                <img src={Image} alt="image" />
            </div>
            <div>
                <h2 className='finish__title'>Rose</h2>
                <p className='finish__text'>крем для лица</p>
                <p className='finish__desc'>Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности <br /> <br /> благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток. </p>
                <div className='finish__item_block'>
                    <h3>890P</h3>
                    <button className='finish__btn'>Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Finish