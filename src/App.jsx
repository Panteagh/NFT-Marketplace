import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Marketplace from './pages/Marketplace/Marketplace'
import Rankings from './pages/Ranking/Rankings'
import Wallet from './pages/Wallet/Wallet'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Marketplace' element={<Marketplace />}></Route>
        <Route path='/Rankings' element={<Rankings />}></Route>
        <Route path='/Wallet' element={<Wallet />}></Route>
      </Routes>
    </>
  )
}

export default App
