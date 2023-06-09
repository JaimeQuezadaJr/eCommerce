import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const Product = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:2}}>
    <div className='top-padding'>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center' md>
          <img src='Lotion-Bottle-Cosmetic-Mockup.jpg' className='img-fluid shadow p-3 mb-5 bg-body rounded'></img>
          </Col>
          <Col className='d-flex justify-content-center' md>
            <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-bold text-secondary text-center'>Aliquip ad veniam officia sit occaecat commodo Lorem laborum aute consectetur adipisicing minim.</p>
            <p className='fw-bold text-secondary text-center'>Aliquip ad veniam officia sit occaecat commodo Lorem laborum aute consectetur adipisicing minim.</p>
            <p className='fw-bold text-secondary text-center'>Aliquip ad veniam officia sit occaecat commodo Lorem laborum aute consectetur adipisicing minim.</p>
            <p className='fw-bold text-secondary text-center'>Aliquip ad veniam officia sit occaecat commodo Lorem laborum aute consectetur adipisicing minim.</p>
            <div className='mt-2'>
              <Button variant="outline-secondary">Learn More</Button>{' '}
              <Button variant="outline-secondary">Add to Bag</Button>{' '}
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
    </motion.div>
    
  )
}

export default Product