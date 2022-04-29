import React from 'react'
import { Routes, Route } from 'react-router'
import Funcionarios from '../pages/funcionarios/Funcionarios'
import Cardapio from '../pages/cardapio/Cardapio'
import Fornecedores from '../pages/fornecedores/Fornecedores'
import Home from '../pages/homeAdm/HomeAdm'
import Comidas from '../pages/cardapio/Comidas/Comidas'


const RoutesApp = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/adm/funcionarios" element={<Funcionarios/>}/>
       <Route path="/adm/funcionarios/:params" element={<Funcionarios/>}/>
       <Route path="/adm/cardapio" element={<Cardapio/>}/>
       <Route path="/adm/cardapio/comidas" element={<Comidas/>}/>
       <Route path="/adm/cardapio/comidas/:params" element={<Comidas/>}/>
       <Route path="/adm/fornecedores" element={<Fornecedores/>}/>
    </Routes>
  )
}

export default RoutesApp;