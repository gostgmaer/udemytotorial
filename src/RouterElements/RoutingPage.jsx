import React from 'react'
import { Route,Routes } from "react-router-dom";
import AssignmentExpense from '../Componets/AssignmentTwo/AssignmentExpense';
import Login from '../Componets/Login/Login';
import LoginPage from '../Componets/Login/Login/Login';
import MovieData from '../Componets/MovieData/MovieData';
import Layout from '../Componets/OrderCart/components/Layout/Layout';
import UIcartShop from '../Componets/OrderCart/components/UIcartShop';
import ReduxCounter from '../Componets/ReduxCounter/ReduxCounter';
import Simple from '../Componets/Simple';
import Expenses from '../Componets/SimpleExpalses/Expenses';
import UpdateInAction from '../Componets/UpdateInAction/UpdateInAction';
import UserElement from '../Componets/UserComponent/User';
import ValidationForm from '../Componets/Validation/ValidationForm';
import Home from '../Pages/Home/Home';



const RoutingPage = () => {
  return (
    <Routes>
        <Route path='/expense1' element={<Expenses></Expenses>}></Route>
        <Route path='/simple' element={<Simple></Simple>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<UserElement></UserElement>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/validation' element={<ValidationForm></ValidationForm>}></Route>
        <Route path='/login-page' element={<LoginPage></LoginPage>}></Route>
        <Route path='/movielist' element={<MovieData></MovieData>}></Route>
        <Route path='/pageupdate' element={<UpdateInAction></UpdateInAction>}></Route>
        <Route path='/redux-counter' element={<ReduxCounter></ReduxCounter>}></Route>
        <Route path='/shopping-cart' element={<UIcartShop></UIcartShop>}></Route>
        <Route path='/new-expense' element={<AssignmentExpense></AssignmentExpense>}></Route>
    </Routes>
  )
}

export default RoutingPage