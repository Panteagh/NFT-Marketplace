import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Marketplace from './pages/Marketplace/Marketplace'
import Rankings from './pages/Ranking/Rankings'
import Wallet from './pages/Wallet/Wallet'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Marketplace' element={<Marketplace />}></Route>
        <Route path='/Rankings' element={<Rankings />}></Route>
        <Route path='/Wallet' element={<Wallet />}></Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App
