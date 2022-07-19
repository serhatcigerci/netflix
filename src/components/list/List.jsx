import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined/>
        <div className="container">
          
        </div>
        <ArrowForwardIosOutlined/>
      </div>
    </div>
  )
}

export default List