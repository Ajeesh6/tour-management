import React from 'react'
import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';



function Header1() {

    let location=useNavigate()
    const check=(e)=>{
        e.preventDefault()
        if(!localStorage.getItem("currentUser")){
          alert('please login')
          
        }
        else{
          location('/profile')
        }
    }
    return (
        <>
                <Navbar bg="light" expand="lg" className='px-4' >
                    <Container fluid>
                        <Navbar.Brand href="/" >
                            <img src='https://i.postimg.cc/xTVnhdBK/kindpng-1960913.png'
                             style={{width:'118px'}}/>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-3 me-auto"
                                style={{ maxHeight: '100px' }}
                                // navbarScroll
                            >
                                <Nav.Link href="/" className='nav_item pe-3 ps-5'>Home</Nav.Link>
                                <Nav.Link href="/about" className='nav_item px-3'>About us</Nav.Link>
                                <Nav.Link onClick={(e) => check(e)} className='nav_item px-3'>Profile</Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link href="/login" className='nav_item px-3'>Login</Nav.Link>
                            <Nav.Link href="/register" className='nav_item px-3'>Rgister</Nav.Link>
                            {/* <button  className='btn submit text-white' type='submit'>
                             submit
                           </button> */}
                            </Nav>
                            {/* <Button variant="outline-success">Search</Button> */}
    
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}

export default Header1