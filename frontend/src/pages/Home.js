import {React,useEffect,useState} from 'react'
import '../styles/Home.css'
import TourCard from './TourCard'
import {Row,Col, Container} from 'reactstrap'
import tour from '../assets/images/experience.jpg'
import axios from 'axios'

function Home() {

    const [tours, setTours] = useState([])

    const getTour = async () => {
        const response = await axios.get('http://localhost:8000/getAllTour')
        setTours(response.data.tours)

    }

    

    useEffect(() => {
        getTour()
    }, [])

  return (
    <>
    <section style={{paddingBottom:'25px'}}>
        <Container>
            <Row>
              <Col lg='7'>
                   <div className='hero_content'>
                   <h1>Pick a vibe and explore the top destinations in India</h1>
                    <div className='hero_subtitle d-flex align-items-center'>
                     <p>
                     Travelling abroad for a holiday is a great thing but there isn’t anything that beats the diversity of landscapes and cultures in India. We inspire local travellers to travel more in India, as our India holiday packages acquaint travellers with the incredible beauty of the country. Take a look at top selling holiday packages in India.
                     </p>
                    </div>
                    
                   </div>
                </Col>  
                <Col lg='5'>
                    <div className='hero_img'>
                        <img src={tour} style={{height:'350px',width:'-webkit-fill-available'}}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
     <Container>
        <Row>
            <Col lg='12' className='mb-4 '>
                <h6>Explore</h6>
                <h2>Our featured tours</h2>
            </Col>
            
            {
                tours.map(data=>(
                    <Col  lg='3' md='6' className='mb-4 p-4'>
                    <TourCard tourdata={data}/>
                    </Col>
                ))
                
            }
            
        </Row>
    </Container>   
    </section>



    <section>
        <Container>
            <Row>
                <h2 className='text-center mb-5' style={{}}>services</h2>
                <Col lg='3' md='6'>
                <div className='counter_box'>
                        <span><i class="fa-solid fa-shield-halved"></i></span>
                        <h4>Your Trusted Advisor</h4>
                        <h6> We’ll answer your every question. Our experienced travel experts and real-time on field know-how gives us this advantage</h6>
                    </div>
                </Col>
                <Col lg='3' md='6'>
                <div className='counter_box'>
                        <span><i class="fa-solid fa-headset"></i></span>
                        <h4>We Love Listening</h4>
                        <h6> Your holiday, your terms. We’ll fill in the blanks to plan the perfect trip in the blink of an eye.</h6>
                    </div>
                </Col>
                <Col lg='3' md='6'>
                <div className='counter_box'>
                        <span><i class="fa-solid fa-handshake"></i></span>
                        <h4>East As ABC</h4>
                        <h6>Travel smooth and stress-free. That’s how easy we make it because that’s how your holiday should be.</h6>
                    </div>
                </Col>
                <Col lg='3' md='6'>
                <div className='counter_box'>
                        <span><i class="fa-solid fa-paper-plane"></i></span>
                        <h4>Handcrafted Holydays</h4>
                        <h6> We interact with our loyal customers to co-create unique experiences that will take your holiday to the next level.</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    </>
  )
}

export default Home