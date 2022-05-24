import React from 'react'
import { BoxIconElement } from 'boxicons'



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