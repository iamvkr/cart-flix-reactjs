// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Cart from './pages/Cart/Cart'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/> } />
      <Route  path='/cart' element={<Cart/> } />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
