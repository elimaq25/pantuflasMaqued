import React from 'react'
import ItemCount from "./ItemCount"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({
  title,
  src,
  precio,
  tallas, 
  disponibilidad,
  id
}) => {
 const [add, setAdd] = useState (false)

 const onAdd =() => {
  setAdd(!add)
 }

  

  return (
    <div>
      <div className='container'>
      <h1 className='nombre_detalle'>{title}</h1>
        <img className='foto_detalle' src={src}/>
        <p className='precio_detalle'>Precio: {precio}</p>
        <p className='descripcion_detalle'> Tallas: {tallas} <br>
        </br>  Disponibilidad: {disponibilidad} </p>
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
        <Link to="/cart"> <button>Finalizar Compra</button></Link>
        </div>
    </div>
    </div>
  );
};


export default ItemDetail