import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { HiShoppingCart } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../Redux/Slice/wishlistSlice'
import { addToCart } from '../Redux/Slice/cartSlice'

function View() {
  const {id}=useParams()
  // console.log(id);
  const [product,setProduct]=useState({})
  const {loading}=useSelector((state)=>state.productReducer)
  const{wishlist}=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)
  const dispatch =useDispatch()

  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("products"))
    setProduct(products?.find(product=>product?.id==id))
  },[])
  // console.log(product);

  const handleWishlist=(product)=>{
    const existingProduct=wishlist.find(item =>item?.id==product?.id)
    if(existingProduct){
      alert("Product already exist")
    }
    else{
      dispatch(addToWishList(product))
    }
  }

  const handleCart=(products)=>{
    const existingProduct=cart?.find(item => item.id == products.id)
    if(existingProduct){
      dispatch (addToCart(products))
      alert("Items added")
    }
    else{
      dispatch (addToCart(products))
      alert("Item added")
    }
  }
  
  return (
    <div className='container-fluid mt-5'>
      {
        loading?
        <div  className='text-center mt-5'>
        <Spinner animation="border" role="status"></Spinner>
      </div>:
        <div className="row w-75" style={{margin:'auto'}}>
        <div className="col-lg-4 mt-5">
          <img src={product?.thumbnail} alt="" className='w-100 shadow rounded-4 p-3' />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-7  mt-5">
          <p>Id<span className='fw-bold fs-4 ms-1'>:{product?.id}</span></p>
          <h1>{product?.title}</h1>
          <h5>Price: <span className='text-danger fw-bold fs-3'>${product?.price}</span></h5>
          <p>Discount Percentage: <span className='text-danger'>{product?.discountPercentage}</span> </p>
          <p>{product?.description}</p>
          <div className='d-flex justify-content-between mt-4'>
            <Button style={{background:'transparent'}} className='border-0 text-secondary rounded' onClick={()=>handleWishlist(product)}>
              <i className='fa-solid fa-heart  me-1 fs-3'></i>
            </Button>
            <Button style={{background:'transparent'}} className='border-0 text-secondary rounded' onClick={()=>handleCart(product)}>
              <HiShoppingCart className='me-1 fs-3' />
            </Button>
          </div>
        </div>
      </div>}
      
    </div>
  )
}

export default View
