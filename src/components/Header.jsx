import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
    <Navbar className='p-3' bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home" className='fw-bolder'>Students Register</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">services</Nav.Link>
        <Nav.Link href="#pricing">About us</Nav.Link>
      </Nav>
   
  <Nav className='ms-auto'>
  <Nav.Link style={{width:'40px',height:'40px'}} ><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            
     <Nav.Link style={{width:'40px',height:'40px'}} >  <i  class="fa-solid fa-heart"></i></Nav.Link>
     <Nav.Link style={{width:'40px',height:'30px'}} > <i class="fa-solid fa-cart-shopping"></i></Nav.Link>
    
         
  </Nav>

  
    </Container>
  </Navbar>
    
    </>  )
}

export default Header