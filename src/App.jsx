import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import Categories from './pages/Categories/Categories'
import Search from './pages/Search/Search'
import LoginSignup from './pages/Login/LoginSignup'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/> } />
      <Route  path='/products/:id' element={<Product/> } />
      <Route  path='/category/:id' element={<Categories/> } />
      <Route  path='/search/:term' element={<Search/> } />
      <Route  path='/cart' element={<Cart/> } />
      <Route  path='/login' element={<LoginSignup/> } />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
