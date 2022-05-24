import React from "react";
import { Header } from "./componentes/NavBar";
import 'boxicons';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
//Componentes
import CartWidget from "./componentes/CartWidget"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemCoun from "./componentes/ItemCount"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Depiso from "./componentes/Vistas/Depiso";
import Inicio from "./componentes/Vistas/Inicio";
import Plataformas from "./componentes/Vistas/Plataformas";
import ItemList from "./componentes/ItemList";


  

function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    
     <br/>

     <br/>
     {/* <ItemCoun></ItemCoun> */}
     </div>
     </Router>
    </>
    

  );
}

export default App;
