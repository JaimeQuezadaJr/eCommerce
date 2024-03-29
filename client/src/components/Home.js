import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';


const Home = () => {

  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'instant'})
  },[])
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <div className='top-padding'>
      <Container fluid className='w-100'>
        <Row>
        <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="applying-moisturizer.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>
            Learn more about Francois and our mission.
          </h2>
          <div className='mt-2'>
              <Button variant="outline-secondary" size='sm'>Learn More</Button>{' '}
              </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="body-lotion.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="applying-moisturizer.webp"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Row>
        <Row className='mt-5'>
        <Col className='d-flex justify-content-center'>
             
          </Col>
          <Col className='d-flex justify-content-center' sm={8}>
            <div className='d-flex flex-column align-items-center'>
            <h1 className='fw-bold'>Face Glow</h1>
              <p className='fw-bold text-secondary text-center home-p'>With new levels of personalization, beautiful and helpful custom Lock Screens, and features to help you get more done, iPad is more capable than ever. </p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}><img src='applying-moisturizer.webp' className='img-fluid shadow p-3 mb-5 bg-body rounded' ></img></motion.div>
              <div className='mt-2'>
              <Button variant="outline-secondary">Learn More</Button>{' '}
              <Button variant="outline-secondary">Order Now</Button>{' '}
              </div>
            </div>
            
          </Col>
          <Col className='d-flex justify-content-center'>
             
          </Col>
        </Row>
        <Row className='mt-5 bg-light'>
          <Col className='d-flex justify-content-center'>
             
          </Col>
          <Col className='d-flex justify-content-center' sm={8}>
            <div className='d-flex flex-column align-items-center mt-3 mb-3'>
              <h1 className='fw-bold'>Body Smooth</h1>
              <p className='fw-bold text-secondary text-center home-p'>With new levels of personalization, beautiful and helpful custom Lock Screens, and features to help you get more done, iPad is more capable than ever. </p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{duration:3}}><img src='body-lotion.webp' className='img-fluid shadow p-3 mb-5 bg-body rounded' ></img></motion.div>
              <div className='mt-2'>
              <Button variant="outline-secondary">Learn More</Button>{' '}
              <Button variant="outline-secondary">Order Now</Button>{' '}
              </div>
            </div>
          </Col>
          <Col className='d-flex justify-content-center'>
             
          </Col>
        </Row>

        <Row className='mt-5 mb-5'>
        <Col className='d-flex justify-content-center'>
             
          </Col>
          <Col className='d-flex justify-content-center' sm={8}>
            <div className='d-flex flex-column align-items-center'>
            <h1 className='fw-bold'>Face Glow</h1>
              <p className='fw-bold text-secondary text-center home-p'>With new levels of personalization, beautiful and helpful custom Lock Screens, and features to help you get more done, iPad is more capable than ever. </p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}><img src='Lotion-Bottle-Cosmetic-Mockup.jpg' className='img-fluid shadow p-3 mb-5 bg-body rounded'  ></img></motion.div>
              <div className='mt-2'>
              <Button variant="outline-secondary">Learn More</Button>{' '}
              <Button variant="outline-secondary">Order Now</Button>{' '}
              </div>
            </div>
            
          </Col>
          <Col className='d-flex justify-content-center'>
             
          </Col>
        </Row>
        </Container>
    </div>
    </motion.div>
    
    
  )
}

export default Home;