import axios from 'axios'
import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Tour.css'
import { Container,Row,Col,ListGroup, Form } from 'reactstrap'
import avatar from '../assets/images/avatar.png'

function Tour() {

  const [tour, setTour] = useState({})
  const [comments, setComments] = useState('')

  const params=useParams()
  const fetchTour=async()=>{
    const result = await axios.get('http://localhost:8000/getOneTour/'+params.id)
    setTour(result.data.tour);

  }

  const booknow=async(e)=>{
    e.preventDefault()
    if(!localStorage.getItem("currentUser")){
      alert('please login')
      
    }
    else{
     let email=JSON.parse(localStorage.getItem("currentEmail") || "")
     let tourData=tour
     const body={
      email,tourData
     }
      const result = await axios.post('http://localhost:8000/booking',body)
      alert(result.data.message)
    }
  }

  const review=async(e)=>{
    e.preventDefault()
    if(!localStorage.getItem("currentUser")){
      alert('please login')
      
    }
    else{
      let tourId=tour.id
      let user =JSON.parse(localStorage.getItem("currentUser") || "")
      const body = {
        id:tourId,
        reviewData:{
          name:user,
          comments
        }
      }
      const result = await axios.post('http://localhost:8000/reviews',body)
      alert(result.data.message)
      fetchTour()
    }
  }
  useEffect(()=>{
    fetchTour()
  },[])

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour_content '>
              <img src={tour.photo}/>
            </div>
            <div className='tour_info'>
            <h5>Description</h5>
              <p>{tour.desc}</p>
            </div>
           
          </Col>

          <Col lg='4'>
          <div className='tour_info'  style={{position:'sticky'}}>
              <h2>{tour.title}</h2>
              <div className='d-flex align-items-center gap-5'>
                <span className='tour_rating d-flex align-items-center gap-1'>
                <i class="ri-star-s-fill" style={{color:'gold'}}></i>
                <span>{tour.avgRating}</span>
                </span>
                <span>
                <i class="ri-map-pin-fill"></i> {tour.address}
                
                </span>
              </div>
              <div className='tour_extra-details'>
                <span><i class="ri-map-pin-line"></i> {tour.city}</span>
                <span><i class="ri-group-line"></i> {tour.maxGroupSize}</span>
              </div>
              
                <h4>Price : ₹ {tour.price}</h4>

              <button onClick={(e)=>booknow(e)} className='btn w-100 text-white' type='submit'>
                   Book now
                  </button>
            </div>

            <div className='tour_reviews mt-4'>
              <h4>Reviews ({tour.reviews?.length} reviews)</h4>
              <Form>
                <div className='review_input'>
                  <input onChange={(e) => setComments(e.target.value)} type='text' placeholder=' share your thoughts'/>
                  <button onClick={(e) => review(e)} className='btn  text-white' type='submit'>
                    submit
                  </button>
                </div>
              </Form>

              <ListGroup className='user_reviews'>
                {
                  tour.reviews?.map(review=>(
                    <div className='review_item'>
                      <img src={avatar}/>
                      <div className='w-100'>
                        <div className='d-flex align-items-center
                        justify-content-between'>
                          
                            <h5>{review.name}</h5>
                          
                        </div>
                        <h6>{review.comments}</h6>
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
            </div>
          </Col>  
            
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Tour