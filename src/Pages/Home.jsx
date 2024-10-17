import React, { useEffect } from 'react'
import { Badge, Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { HiShoppingCart } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slice/productSlice'
import { addToWishList } from '../Redux/Slice/wishlistSlice'
import { addToCart } from '../Redux/Slice/cartSlice'
import Header from '../Components/Header'

function Home() {
  const dispatch =useDispatch()
  const{loading,products,error}=useSelector((state)=>state.productReducer)
  const{wishlist}=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)
  // console.log(loading);
  // console.log(products);
  // console.log(error);
  
  useEffect(() =>{
    dispatch(fetchProducts())
  },[])

  const handleWishlist=(products)=>{
    const existingProduct=wishlist.find(item =>item?.id==products?.id)
    if(existingProduct){
      alert("Product already exist")
    }
    else{
      dispatch(addToWishList(products))
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
    <>
    <Header insideHome={true}/>
    {
    loading?
      <div  className='text-center mt-5'>
        <Spinner animation="border" role="status"></Spinner>
      </div>:
      <div className='mt-5 container-fluid px-3 '>
        <Row >
          {
            products?.length>0?products.map((products,index) =>(
            <Col key={index} sm={6} md={4} lg={3} xl={3} className='mt-5 d-flex justify-content-center'>
              <Card className='rounded-4 border-0 bg-light shadow w-100' style={{width:'21rem', height:"100%"}}>
              <Link to={`./view/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
              <Card.Body>
                <Card.Title className='fw-bold fs-4 text-center'>{products.title}</Card.Title>
                <Card.Text className='mt-0'>
                  <div className='text-center'>
                    <Link to={`./view/${products.id}`} style={{textDecoration:'none'}} className='text-dark'>
                      <p>
                        Brand:<span className='fs-5 fw-bold'>{`${products.brand}`}</span> <br />
                        Price:<span className='fs-5 fw-bold'>{`$${products.price}`}</span><br />
                        Rating: <Badge className='rounded fs-6 bg-success'>{`${products.rating}`}</Badge>
                      </p>
                    </Link>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn border-0 rounded-3 fs-4 text-secondary bg-light' onClick={()=>handleWishlist(products)}>
                      <i className='fa-solid fa-heart me-1'></i>
                    </Button>
                    <Button className='btn border-0 fs-3 rounded-3 text-secondary bg-light' onClick={()=>handleCart(products)}>
                      <HiShoppingCart className='me-2' />
                    </Button>
                  </div>
                </Card.Text >
              </Card.Body>
            </Card>
          </Col>)):
          <div className='fw-bold mb-5'>
            <div className="row">
              <div className="col-md-4 sm-12"></div>
              <div className="col-md-4 sm-12">
                <div className='text-center'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-illustration-download-in-svg-png-gif-file-formats--no-results-service-landing-page-security-empty-state-pack-design-development-illustrations-3613889.png?f=webp" alt="search not found" className='w-100' />
                <div className='d-flex justify-content-center'>
              <p className='fs-2 text-secondary'>No result found...</p>
              </div>
                </div>
              </div>
              <div className="col-md-4 sm-12"></div>
            </div>
          </div>
         }
       </Row>
      </div>
    }
  </> 
  )
}

export default Home
