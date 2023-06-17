import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion, useScroll } from 'framer-motion';

const ProductInfo = () => {
    const { scrollYProgress } = useScroll();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <div className='top-padding'>
        <Container>
        {windowWidth>640?(
        <Row>
            <Col className='text-center'>
            <h1 className='product-title'>Face Glow</h1>
            </Col>
        </Row>)
        :<h1 className='text-center'>Face Glow</h1>}
        <Row>
            <Col></Col>
            <Col className='d-flex justify-content-center' lg={8}>
            <img src='Lotion-Bottle-Cosmetic-Mockup.jpg' className='img-fluid shadow p-3 mb-5 bg-body rounded'></img>
            </Col>
            <Col></Col>
        </Row>

        <section>
        <Row>
            <Col>
                <p className='fw-bold text-secondary'>Ingredients</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h1>All Natural</h1>
                <h1>Organic and Fresh</h1>
            </Col>
        </Row>

        <Row>
            <Col></Col>
            <Col className='d-flex justify-content-center' lg={8}  >
                <img src='organicingredients.jpeg' className='img-fluid shadow p-3 mb-5 bg-body rounded'></img>
            </Col>
            <Col></Col>
        </Row>
        <Row>
        <Col className='d-flex justify-content-center'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
            {windowWidth>640?(
            <p className='fw-bold text-secondary text-center info-p'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>):
            <p className='fw-bold text-secondary text-center'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>}
            <div className='mt-2'>
                <Button variant="outline-secondary">Learn More</Button>{' '}
                <Button variant="outline-secondary">Add to Bag</Button>{' '}
                </div>
            </div>
            
            </Col>
        </Row>
        </section>

        <section>
            <Row>
                <Col>
                    <p className='fw-bold text-secondary'>Benefits</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Fountain of Youth</h1>
                    <h1>Glowing and Smooth</h1>
                </Col>
            </Row>

            <Row>
                <Col></Col>
                <Col className='d-flex justify-content-center' lg={8}  >
                    <img src='applying-moisturizer.webp' className='img-fluid shadow p-3 mb-5 bg-body rounded'></img>
                </Col>
                <Col></Col>
            </Row>
            <Row>
            <Col className='d-flex justify-content-center'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='fw-bold text-secondary text-center info-p'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                <div className='mt-2'>
                    <Button variant="outline-secondary">Learn More</Button>{' '}
                    <Button variant="outline-secondary">Add to Bag</Button>{' '}
                    </div>
                </div>
                
                </Col>
            </Row>
        </section>
        <section>
            <Row>
                <Col>
                    <p className='fw-bold text-secondary'>How to Use</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Easy</h1>
                    <h1>Seamless</h1>
                </Col>
            </Row>
            
            <Row>
                <Col></Col>
                <Col className='d-flex justify-content-center' lg={8}  >
                    <img src='organicingredients.jpeg' className='img-fluid shadow p-3 mb-5 bg-body rounded'></img>
                </Col>
                <Col></Col>
            </Row>
            <Row>
            <Col className='d-flex justify-content-center'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='fw-bold text-secondary text-center info-p'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                <div className='mt-2'>
                <Button variant="outline-secondary">Learn More</Button>{' '}
                <Button variant="outline-secondary">Add to Bag</Button>{' '}
                </div>
                </div>
                
            </Col>
            </Row>
        </section>

        </Container>
    </div>
    </motion.div>
  )
}

export default ProductInfo