import React from 'react'
import { Card,CardBody } from 'reactstrap'
import '../styles/TourCard.css'
import { Link } from 'react-router-dom'

function TourCard({tourdata}) {
  return (
    <div className='tour_card'>
        <Card>
            <div className='tour_img'>
                <img src={tourdata.photo}/>
            </div>
            <CardBody>
        <h5 className='tour_title'><i class="fa-solid fa-location-dot"></i> {tourdata.title}</h5>
        <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>₹ {tourdata.price} <span>/per person</span></h5>
            <Link to={'/tour/'+tourdata.id}>
                <button className='btn booking_btn'>
                    Book Now
                </button>
            </Link>
        </div>

        </CardBody>
        </Card>
        
    </div>
  )
}

export default TourCard