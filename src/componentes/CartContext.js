import React, { createContext, useState } from "react";

export const CartContext = createContext(); 


export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])
    
    const addItem = (data) => {
       let found = undefined

       const newProduct = {
           id: data.id,
           title: data.title,
           precio: data.precio,
           qty: Number(data.qty)
       }

       items.forEach((item, index)=>{
           if(item.id === data.id){
               found = index
           }
       })

       if(found === undefined) {
           items.push(newProduct)
           setItems(items)
           console.log(items)
           console.log("Producto agregado")
       } else {
           items[found].qty += Number(data.qty)
           setItems(items)
           console.log("Producto modificado")
           console.log(items)
       }
    }

    const removeItem = (itemId) => {
        let found = false

        items.forEach((item, index)=>{
            if(item.id === itemId) {
                found = index
            }
        }); 

        if (found){
            items.splice(found, 1)
            setItems(items)
        }else {
            console.log("No se encontro el producto")
        }
    }

    const clear = () => {
        setItems([])
    }

    const isInCart = (id) => {
        const found = items.find(item => item.id === id);

        if(found){
            return(true)
        }else{
            return(false)
        }
    }

    
    
    return (
        <CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
}