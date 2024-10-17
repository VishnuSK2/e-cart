import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/Slice/cartSlice'

function Cart() {
  const cart=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()

  const [total,setTotal]=useState(0)
  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(products=>products?.totalprice).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }

  },[cart])

  return (
    <div className='container mt-5'>
      {
        cart?.length>0?
        <div className="row mt-5 ">

        <div className="col-lg-8 mt-4 ">
          <table className='table shadow text-center mt-5 '>
            <thead >
              <tr>
                <th className='border p-2'>#</th>
                <th className='border px-5'>Title</th>
                <th className='border p-2'>Image</th>
                <th className='border' style={{width:'10px'}}>Quantity</th>
                <th className='border p-2'>Price</th>
                <th className='border p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map((products,index)=>(<tr>
                  <td className='border'>{index+1}</td>
                  <td className='border'>{products.title}</td>
                  <td className='border p-3'>
                    <img src={products.thumbnail} alt="" className='w-25 ' />
                  </td>
                  <td>
                    <input type="text" value={products?.quantity} className='form-control border-0 fs-5 mt-2 rounded text-center' />
                  </td>
                  <td className='border p-3 fs-5'>{products.totalprice}</td>
                  <td className='border p-3 fs-5'>
                    <Button style={{background:'transparent'}} className='border-0 rounded' onClick={()=>dispatch(removeFromCart(products?.id))}> 
                      <FaTrashAlt className='text-secondary fs-6' />
                    </Button></td>
                </tr>
                ))
                }
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <button className='btn btn-outline-secondary rounded-3 fw-bold' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
            <Link to={'/'}>
               <button  className='btn btn-outline-secondary rounded-3 fw-bold'>Shop More</button>
            </Link>
          </div>
        </div>

        <div className="col-lg-1"></div>
        
        <div className="col-lg-3 mt-4">
          <div className="container border-0 bg-light rounded-4 mt-4 shadow p-5 w-100 mt-5">
            <h3 className='fw-bold text-center'>Cart Summary</h3>
            <p className='m-0 mt-4 fs-5'>Total Products: {cart.length}</p>
            <p className='fs-5 '>Total: <span className='text-danger fw-bolder'>${total.toFixed(2)}</span></p>
          </div>
          <div className='d-grid'>
            <button className='btn m-3 rounded shadow text-light' style={{background:"rgb(89, 49, 150)"}}>Checkout</button>
          </div>
        </div>
      </div>:
            <div className='row'>
          <div className="col-md-3 sm-12"></div>
          <div className="col-md-6 sm-12 mt-5">
            <div className='text-center mt-1'>
              <img src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/barcelona/shopping/shopping/empty-cart-wm9du5yhptglq38qnrw9tj.png?_a=DAJFJtWIZAAC" alt="empty cart" className='w-75' />
              <div className='d-flex justify-content-center'>
              <p className='fs-4 text-secondary'>Your cart is empty,</p>
              <Link to={'/'}  style={{textDecoration:'none'}}><p className='text-secondary border-0 rounded-3 fs-4 ms-2 fw-bold'>Shop Now</p></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 sm-12"></div>
       </div>
      }
    </div>
  )
}

export default Cart
