import React, { useContext } from 'react'
import ItemCount from "./ItemCount"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';


const ItemDetail = ({
  title,
  src,
  precio,
  id
}) => {
 const [add, setAdd] = useState (false)
 
 const [addItem] = useContext(CartContext)



 
 const onAdd =() => {
  setAdd(!add)
 }


  

  return (
    <div>
      <div className='container'>
      <h1 className='nombre_detalle'>{title}</h1>
        <img className='foto_detalle' src={src}/>
        <p className='precio_detalle'>Precio: {precio}</p>
        <p className='id_detalle'>ID del producto: {id}</p>
      
        
       <div className='carri' >
           {
             add ?
             <div>¡Añadido!</div>
             :
             <ItemCount stock={10} initial={1} onAdd={onAdd}/>
           }
        </div>
        <div>
        <Link to="/cart" onClick={() =>{addItem({title, precio, id})}}> <button>Finalizar Compra</button></Link>
        </div>
    </div>
    </div>
  );
};


export default ItemDetail