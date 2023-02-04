import React from 'react'
import { navigation } from '../../Assets/StaticData/navigation'
import ListElements from './ListElements'
import './home.scss'

const Home = () => {
  return (
    <div className='Home'>


        <ul>
            {navigation.map(item=><ListElements key={item.id} item={item} ></ListElements>)}
        </ul>
    </div>
  )
}

export default Home