import React, { useContext, useState, useEffect } from 'react'
import { BoxIconElement } from 'boxicons'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'



const CartWidget = () => {
 const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
 const [cantItems, setCantItems] = useState(0)

 useEffect(()=>{
   setCantItems(items.length)
 }, [items.length])

 const prueba = ()  => {
   console.log(items)
 }
  return (
    <>
    <div>
        <div className='cart' onLoad={prueba}>
            < box-icon name="cart"></ box-icon> 
            <span className='item__total'>{cantItems}{items.length}</span>
            <span>{cantItems}</span>
        </div>
    </div>
    </>
  )
}

export default CartWidget