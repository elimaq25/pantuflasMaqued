import React from 'react'

import {productoUno}  from "./Productos"
import ItemCount from "./ItemCount"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({productoUno}) => {
 const [add, setAdd] = useState (false)

 const onAdd =() => {
  setAdd(!add)
 }

  

  return (
    <div>
      <div className='container'>
      <h1 className='nombre_detalle'>{productoUno.title}</h1>
        <img className='foto_detalle' src={productoUno.src}/>
        <p className='precio_detalle'>Precio: {productoUno.precio}</p>
        <p className='descripcion_detalle'> Tallas: {productoUno.tallas} <br>
        </br>  Disponibilidad: {productoUno.disponibilidad} </p>
        <p className='id_detalle'>ID del producto: {productoUno.id}</p>
      
        
       <div className='carri' >
           {
             add ?
             ""
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