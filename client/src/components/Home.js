import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <div className='top-padding'>
      <Container>
       <Row>
        <Col>
        <Carousel variant='dark' controls=''>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="applying-moisturizer.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 hide-bg"
          src="smooth.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
        </Row> 
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="sun-icon-vector.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
    </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="logo512.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>1 of 1
        <Col>
    </Col>
      </Row>
      <Row></Row>
    </Container>
    </div>
    
    
  )
}

export default Home;