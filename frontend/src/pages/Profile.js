import {React,useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import userImg from '../assets/images/user.png'
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Profile() {

  let user = JSON.parse(localStorage.getItem("currentUser") || "")
  let email= JSON.parse(localStorage.getItem("currentEmail") || "")

  const [tour, setTour] = useState([])

  let location=useNavigate()
  const logout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentEmail')
    location('/')
  }

  const fetchTour=async()=>{
    const body={
      email
    }
    const result = await axios.post('http://localhost:8000/bookedData',body)
    setTour(result.data.data);
     console.log(tour);
  }


  const cancelTour=async(e)=>{
    e.preventDefault()
    let id=tour.id
    const body={
      email,id
    }
    const result = await axios.post('http://localhost:8000/cancelTour',body)
    alert(result.data.message)
    fetchTour()
  }





  useEffect(() => {
    fetchTour()
}, [])
  return (
    <>

      <Card className='w-25 container mt-4'>
        <div className='text-center'><Card.Img className='mt-3' variant="top" src={userImg} style={{ width: '140px' }} /></div>
        <Card.Body>
          <Card.Title className='text-center'>{user}</Card.Title>
          <Card.Title className='text-center'>{email}</Card.Title>
          <Card.Title className='text-center'>
            <Button onClick={(e)=>logout(e)} type="submit" className='mt-4' style={{ backgroundColor: 'blueviolet', border: 'none' }}>Log out</Button>
          </Card.Title>
        </Card.Body>
      </Card>

      <section>
        <Container>
          <div style={{ marginBottom: '2rem', borderRadius: '0.5rem', border: '1px solid rgb(229,231,235)', padding: '2rem' }}>
            <h3>Your Bookings</h3>
            <Row>


              {
                tour.map(data=>(
                  <Col lg='3' md='6' className='mb-4 p-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title> {data.title}</Card.Title>
                    <Card.Text>
                      <div className='d-flex align-items-center mt-4' style={{gap:'50px'}}>
                      <span>
                          <i class="ri-map-pin-fill"></i> {data.address}

                        </span>
                        <span className='tour_rating d-flex align-items-center gap-1'>
                          <i class="ri-star-s-fill" style={{ color: 'gold' }}></i>
                          <span>{data.avgRating}</span>
                        </span>
                        
                        
                      </div>
                      <h5 className='mt-4 px-2'>Price : ₹ {data.price}</h5>
                    </Card.Text>
                    <div className='text-center'>
                      <Button onClick={(e)=>cancelTour(e)} variant="primary" style={{ backgroundColor:"rgba(135 28 28)", border: 'none' }}>
                        Cancel booking
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
                ))
                
              }


            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Profile