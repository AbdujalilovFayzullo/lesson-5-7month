import React from 'react'
import './catalog.scss'
import Nav from './nav/Nav'
import Wrapper from './wrapper/Wrapper'
import List from './list/List'
import End from '../home/end/End'
import Block from '../home/block/Block'

const Catalog = () => {
  return (
    <div className='catalog__container'>
      <Nav />
      <Wrapper />
      <List />
      <Block />
      <End />
    </div>
  )
}

export default Catalog