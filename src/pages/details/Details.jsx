import React from 'react'
import './details.scss'
import Finish from './finish/Finish'
import List from '../catalog/list/List'

const Details = () => {
  return (
    <div className='details details__container'>
      <Finish />
      <List />
    </div>
  )
}

export default Details