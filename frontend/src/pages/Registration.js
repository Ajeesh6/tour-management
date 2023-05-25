import {React, useState} from 'react'
import '../styles/Login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import loginImg from '../assets/images/register.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Registration() {

  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  let location = useNavigate()

  const register=async(e)=>{
    e.preventDefault()
    
    const body={
      uname,email,password
    }
    console.log(body);


  try{
    const result=await axios.post('http://localhost:8000/register',body)
   console.log(result);
   alert(result.data.message)
    location('/login')
  }
  catch(e){
    if (e.response && e.response.data) {
      alert(e.response.data.message) 
      location('/login')
    }
  }



    
  }

  return (
    <>
      <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login_container d-flex justify-content-between'>
              <div className='login_img'>
                <img src={loginImg}/>
              </div>
              <div className='login_form'>
                {/* <div className='user'>
                  <img src={userIcon}/>
                </div> */}
                <h2>Sign Up</h2>

                <Form>
                  <FormGroup>
                    <input onChange={(e) => setUname(e.target.value)} type='text' placeholder='User name' id='uname'/> 
                    <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' id='email'/>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password'/>
                  </FormGroup>
                  <Button onClick={(e)=>register(e)} className='btn auth_btn' type='submit'>Register</Button>
                </Form>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Registration