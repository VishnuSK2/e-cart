import React from 'react'
import {CardText, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Redux/Slice/wishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';

function Wishlist() {
  const dispatch=useDispatch()
  const{wishlist}=useSelector((state)=>state.wishlistReducer)

  const handleCart=(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }

  return (
    <div >
      <div style={{margin:"50px"}}>
    <Row >
      {
        wishlist?.length>0?wishlist.map(products=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className='rounded-3 mt-5 border-0 shadow' style={{ height:"93%"}}>
            <Link to={`/view/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
            <Card.Body>
              <Card.Title className='fw-bold fs-3 text-start'>{products.title}</Card.Title>
                <CardText>
                  <p>Price:<span className='fs-5 fw-bold text-start'>{`$${products.price}`}</span></p>
                  <div className="d-flex justify-content-between">
                    <Button className='btn border-0 fs-5 rounded' onClick={() => dispatch(removeFromWishlist(products.id))} style={{background:'transparent'}}>
                      <i class="fa-solid fa-trash text-secondary" ></i>
                    </Button>
                    <Button className='btn border-0 fs-5 rounded' onClick={()=>handleCart(products)} style={{background:'transparent'}}>
                      <i class="fa-solid fa-cart-shopping text-secondary"></i>
                    </Button>
                  </div>
                </CardText>
            </Card.Body>
         </Card>
       </Col>)):
       <div className='row'>
          <div className="col-md-3 sm-12"></div>
          <div className="col-md-6 sm-12 mt-5">
            <div className='text-center mt-1'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png" alt="empty wishlist" className='w-75' />
              <div className='d-flex justify-content-center'>
              <p className='fs-4 text-secondary mt-4'>Your wishlist is empty,</p>
              <Link to={'/'}  style={{textDecoration:'none'}}><p className='text-secondary border-0 rounded-3 fs-4 ms-2 fw-bold mt-4'>Add Now</p></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 sm-12"></div>
       </div>
     }
   </Row>
  </div>
</div>)

}


export default Wishlist
