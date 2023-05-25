import { React, useState } from 'react'
import '../styles/Login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import loginImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let location = useNavigate()

  const login = async (e) => {
    e.preventDefault()

    const body = {
      email, password
    }
    console.log(body);

    try {
      const result = await axios.post('http://localhost:8000/login', body)
      localStorage.setItem("currentUser", JSON.stringify(result.data.currentUser))
      localStorage.setItem("currentEmail", JSON.stringify(result.data.currentEmail))
      alert(result.data.message)
      location('/')
    }
    catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message)
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
                  <img src={loginImg} />
                </div>
                <div className='login_form'>
                  {/* <div className='user'>
                  <img src={userIcon}/>
                </div> */}
                  <h2>Login</h2>

                  <Form>
                    <FormGroup>
                      <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' id='email' />
                      <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password' />
                    </FormGroup>
                    <Button onClick={(e) => login(e)} className='btn auth_btn' type='submit'>Login</Button>
                  </Form>
                  <p>Don't have an account? <Link to={'/register'}>create</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Login