import React, { useContext } from 'react'
import { BoxIconElement } from 'boxicons'
import { CartContext } from './CartContext'



const CartWidget = () => {
 
  return (
    <>
    <div>
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item__total'>0</span>
        </div>
    </div>
    </>
  )
}

export default CartWidget