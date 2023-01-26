import React from 'react'
import { Route,Routes } from "react-router-dom";
import Simple from '../Componets/Simple';
import Expenses from '../Componets/SimpleExpalses/Expenses';
const RoutingPage = () => {
  return (
    <Routes>
        <Route path='/expense1' element={<Expenses></Expenses>}></Route>
        <Route path='/simple' element={<Simple></Simple>}></Route>
    </Routes>
  )
}

export default RoutingPage