import React from 'react'
import {MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className='mt-5'>
      <MDBFooter className='text-center shadow ' style={{ backgroundColor: 'aliceblue' }}>
        <MDBContainer className='pt-4 '>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='m-1 shadow rounded-5 bg-light'
              href='#!'
              role='button'
            >
            <MDBIcon 
              fab 
              className='fab fa-facebook-f' />
            </MDBBtn>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='m-1 shadow rounded-5 bg-light'
              href='#!'
              role='button'
            >
            <MDBIcon 
              fab
              className='fa-twitter' />
            </MDBBtn>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='m-1 shadow rounded-5 bg-light'
              href='#!'
              role='button'
            >
            <MDBIcon
              fab
              className='fa-google' />
            </MDBBtn>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='m-1 shadow rounded-5 bg-light'
              href='#!'
              role='button'
            >
            <MDBIcon
              fab
              className='fa-instagram' />
            </MDBBtn>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='m-1 shadow rounded-5 bg-light'
              href='#!'
              role='button'
            >
            <MDBIcon
            fab
            className='fa-youtube' />
            </MDBBtn>
         </section>
       </MDBContainer>
       <div className='p-3 shadow fw-light' style={{backgroundColor:'aliceblue',color:'rgb(89, 49, 150)'}}>© 2024 Copyright:<a className='ms-1' href='#' style={{textDecoration:"none" }}>ECart.com</a></div>
    </MDBFooter>
  </div>
  )
}

export default Footer
