import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Footer from './Components/Footer'
import Home from './Pages/Home'


function App() {

  return (
    <div style={{backgroundColor:"aliceblue"}} >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/view/:id'element={<View/>}/> 
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer />  
    </div>
  )
}

export default App
