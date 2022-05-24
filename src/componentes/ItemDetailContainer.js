import React from 'react'
import {useEffect , useState} from "react"
import {productoUno}  from "./Productos"
import ItemDetail from '../componentes/ItemDetail'
import { Link, useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
   
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        // setTimeout(()=>{

        // }, 2000
        // )
        const detall = new Promise((resolve, reject)=>{
           setTimeout(()=>{
            resolve(productoUno);
           }, 2000)
           
        }); 

        detall.then((detall)=>{
            setProducto(detall);
        } );
        detall.catch((err) => {
            console.log(err)
        });
    }, []);

  return (
    <div>
        
        <ItemDetail productoUno={productoUno}/>
        
       
    </div>
  )
}





export default ItemDetailContainer