import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart/Cart'
import Layout from './Layout/Layout'
import Products from './Shop/Products'
import Card from './UI/Card'

const UIcartShop = () => {
    const showCart = useSelector((state) => state["uiCart"].showCart);
  return (
    <div className='UIcartShop'>
        <Layout>
       {showCart&& <Cart></Cart>}
        <Products></Products>
        </Layout>
       

    </div>
  )
}

export default UIcartShop