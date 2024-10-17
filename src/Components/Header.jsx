import React, { useEffect, useState } from 'react'
import { Badge, Form, Nav, Navbar } from 'react-bootstrap'
import { HiShoppingBag, HiShoppingCart } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../Redux/Slice/productSlice'

function Header({insideHome}) {
  const dispatch= useDispatch()

  const[wishlistCount,setWishlistCount]=useState(0)
  const{wishlist}=useSelector((state)=>state.wishlistReducer)
  const[cartCount,setCartCount]=useState(0)
  const cart=useSelector((state)=> state.cartReducer)


  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])



  return (
    <div className='container-fluid shadow ' style={{backgroundColor:'rgb(89, 49, 150)',position:'fixed',top:'0',zIndex:'1'}}>
      
      <Navbar expand="lg"  className='p-2' style={{backgroundColor:'rgb(89, 49, 150)'}}>
        <Link to={"/"}>
           <Navbar.Brand href="#home" className='fs-3 fw-bold' style={{color:'aliceblue'}}>
             <HiShoppingBag className='me-2'/>
             E-Cart
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle className='bg-light rounded-3 shadow' aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#home" className='btn '>
                <Link to={'/wishlist'} style={{textDecoration:'none'}} className='text-light'>
                    <i className='fa-solid fa-heart me-2' style={{color:'aliceblue'}}> </i>
                     Wishlist
                    <Badge className='text-dark rounded ms-2' bg='' style={{background:"aliceblue"}}>{wishlistCount}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link href="#home" className='btn'>
                <Link to={'/cart'} style={{textDecoration:'none', color:'aliceblue'}} className='text-light'>
                     <HiShoppingCart className='me-1' style={{color:'aliceblue'}} />
                     Cart
                     <Badge className='text-dark rounded ms-2' bg='' style={{background:"aliceblue"}} >{cartCount}</Badge>
                </Link>
            </Nav.Link>
            {insideHome&&<Nav.Link >
            <Form.Control  onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))} type="text" placeholder="Search products" className=" mr-sm-2 rounded-5" style={{fontSize:'12px',background:"aliceblue"}} />
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>

     </Navbar>
    </div>
  )
}

export default Header
