import React from 'react'
import { useEffect, useState } from 'react'
import produc from './Productos';
import ItemList from "../componentes/ItemList";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { category } from "./Productos";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    let { category } = useParams();
    

    let id = useParams();


   
  

    useEffect((cat)=>{
        // setTimeout(()=>{

        // }, 2000
        // )
       
        const data = new Promise((resolve, reject)=>{
          const productosFiltrados = produc.filter(
            (prod)=>prod.category === cat);
           setTimeout(()=>{
            if (cat === undefined) {
              resolve(produc);
            } else {
              resolve(productosFiltrados)
            }
            
           }, 2000)
           
        });

        data.then((data)=>{
            setItems(data);
        } );
        data.catch((err) => {
            console.log(err)
        });
    }, []);

  return (
    <>
    
    <ItemList items={items}/>
    
       
    </>
  );  
};


export default ItemListContainer


