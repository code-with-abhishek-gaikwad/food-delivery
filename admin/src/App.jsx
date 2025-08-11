import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Sidebar } from './components/Sidebar/Sidebar.jsx'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List/List.jsx'
import { Add } from './pages/Add/Add.jsx'
import Orders from './pages/Orders/Orders.jsx'

export const App = () => {
  return (
    <div>
     <Navbar/>
     <hr/>
     <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path='/add' element ={<Add/>}/>
         <Route path='/list' element ={<List/>}/>
          <Route path='/orders' element ={<Orders/>}/> 
       
      </Routes>
     </div>
    </div>
  )
}

