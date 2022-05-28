import React, { useContext } from 'react'
import { CartContext } from '../Context/UseContext'

const Cart = () => {
    const {alCart, removeItem} = useContext(CartContext); 

    const inInCard = (id) => {
        if (true) {
            console.log(CartContext)
        } else {
            console.log ("Carrito Vacío")
        }
    }

  return (
    <div>
        {
            alCart.map((alCart)=> (
                <div key={alCart.id}> 
                    <h1>{alCart.title}</h1>
                    <p onClick={()=> removeItem(alCart.id)}>Borrar</p>
                </div>
            )
            )
        }

    </div>
  )
}

export default Cart