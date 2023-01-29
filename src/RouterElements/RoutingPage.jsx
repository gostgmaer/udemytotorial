import React from 'react'
import { Route,Routes } from "react-router-dom";
import AssignmentExpense from '../Componets/AssignmentTwo/AssignmentExpense';
import Login from '../Componets/Login/Login';
import Simple from '../Componets/Simple';
import Expenses from '../Componets/SimpleExpalses/Expenses';
import UserElement from '../Componets/UserComponent/User';

const RoutingPage = () => {
  return (
    <Routes>
        <Route path='/expense1' element={<Expenses></Expenses>}></Route>
        <Route path='/simple' element={<Simple></Simple>}></Route>
        <Route path='/user' element={<UserElement></UserElement>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/new-expense' element={<AssignmentExpense></AssignmentExpense>}></Route>
    </Routes>
  )
}

export default RoutingPage