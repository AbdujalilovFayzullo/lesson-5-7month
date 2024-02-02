import React from 'react'
import './home.scss'
import Navbar from './navbar/Navbar'
import Card from './card/Card'
import Info from './info/Info'
import Box from './box/Box'
import Cards from './cards/Cards'
import Block from './block/Block'
import End from './end/End'

const Home = () => {
  return (
    <>
    <div className='home home__container'>
        <Navbar />
        <Card />
    </div>
        <Info />
        <div className='home home__container'>
          <Box />
        </div>
        <Cards />
        <div className='home home__container'>
          <Block />
          <End />
        </div>
    </>
  )
}

export default Home