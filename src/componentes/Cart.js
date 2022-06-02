import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'

const Cart = ({data}) => {

  const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(()=> {
    if(items.lenght>0){
      setShow(true)
    }

    let partial = 0 
    items.forEach(data => {
      partial = partial + (data.precio*data.qty)
    })
    setTotal(partial)
  }, []); 
 

  return (
    <>
    
      show ?
      <>
    {items.map((value)=> {
      return (
        <CartItem key={value.id} item={value} />
          
      )
    })}
    <p>Total: ${total}</p> 
      : 
     
    <h2>Carrito vacío</h2>    
    </>
    </> 
  )
}



export default Cart