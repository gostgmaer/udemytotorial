import React from 'react'
import { Route,Routes } from "react-router-dom";
import AssignmentExpense from '../Componets/AssignmentTwo/AssignmentExpense';
import Simple from '../Componets/Simple';
import Expenses from '../Componets/SimpleExpalses/Expenses';
const RoutingPage = () => {
  return (
    <Routes>
        <Route path='/expense1' element={<Expenses></Expenses>}></Route>
        <Route path='/simple' element={<Simple></Simple>}></Route>
        <Route path='/new-expense' element={<AssignmentExpense></AssignmentExpense>}></Route>
    </Routes>
  )
}

export default RoutingPage