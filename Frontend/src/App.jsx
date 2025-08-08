import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Login from './pages/Login'
import Product from './pages/Product'
import Cart from './pages/cart'
import Collection from './pages/collection'
import PlaceOrder from './pages/placeOrder'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    <Footer/>
    </div>
  )
}

export default App