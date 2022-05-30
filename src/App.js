import React from "react";
import { Header } from "./componentes/NavBar";
import 'boxicons';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
//Componentes

import ItemListContainer from "./componentes/ItemListContainer"

import ItemDetailContainer from "./componentes/ItemDetailContainer";

import { CartProvider } from "./componentes/CartContext";


  

function App() {
  return (
    <CartProvider>
    <>
    
    
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<h1>Carrito</h1>}/>
      </Routes>
    
     <br/>

     <br/>
     {/* <ItemCoun></ItemCoun> */}
     </div>
     </Router>
     
    </>
    </CartProvider>
    

  );
}

export default App;
