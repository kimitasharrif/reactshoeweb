import React from 'react'
import './carousel.css'

const Carousel = () => {
  return (
    <div>
         {/* Carousel Component */}
      <Carousel interval={3000} controls={false} indicators={true} fade={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Doctor}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Doctor}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Third+Slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  )
}

export default Carousel
