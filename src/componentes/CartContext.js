import React, { createContext, useState } from "react";

export const CartContext = createContext(); 

const initialState = 0; 

export const CartProvider = ({children}) => {
    const [items, setItems ] = useState(initialState);

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}