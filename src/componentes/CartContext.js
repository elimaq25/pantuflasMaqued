import React, { createContext, useState } from "react";

export const CartContext = createContext(); 

const inCart = []; 

export const CartProvider = ({children}) => {

    const addItem = (id, title, precio, qty) => {
       const newProduct = {
           title: title,
           precio: precio,
           qty: qty,
           id: id

       }

    const found = items.find(item=> item.id == id); 
    
    if(!found){
        inCart.push(newProduct)
        setItems(inCart)

        console.log(items)
    }else{
        console.log("El producto ya se agrego")
    }
    }

    const removeItem = (itemId) => {
        let found = false

        items.forEach((item, index, arr)=>{
            if(item.id == itemId) {
                found = index
            }
        }); 

        if (found){
            const arrayNuevo = inCart.splice(found, 1)
            setItems(arrayNuevo)
        }else {
            console.log("No se encontro el producto")
        }
    }

    const clear = () => {
        setItems([])
    }

    const isInCart = (id) => {
        const found = items.find(item => item.id == id);

        if(found){
            return(true)
        }else{
            return(false)
        }
    }

    const [items, setItems] = useState(inCart)
    
    return (
        <CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
            {children}
        </CartContext.Provider>
    )
}