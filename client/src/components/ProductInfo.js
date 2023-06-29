import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const ProductInfo = () => {
    const navigate = useNavigate();
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
        <Button variant="secondary" className='fixed-bottom' onClick={() => navigate('/buyproduct')}>Buy Now</Button>
        {windowWidth>640?(
            <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:4}}>
            <Row className='row-padding'></Row>
        <Row>
            <Col className='text-center'>
            <h1 className='product-title mb-0'>Face Glow</h1>
            </Col>
        </Row>
        </motion.div>
        <Row className='row-bottom-padding'></Row>
        </>)
        :<h1 className='text-center'>Face Glow</h1>}
        <Row>
            
            <Col></Col>
            <Col className='d-flex justify-content-center' lg={8}>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once:false }} transition={{duration:4}}>
            <img src='Lotion-Bottle-Cosmetic-Mockup.jpg' className='img-fluid shadow p-3 mb-5 bg-body rounded'></img>
            </motion.div>
            </Col>
            <Col></Col>
        </Row>

        {/* ingredients */}
        <section className='mb-4'>
        <Row>
            <Col>
                <p className='fw-bold text-secondary'>Ingredients</p>
            </Col>
        </Row>
        <Row>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
            <Col>
                <h1>All Natural</h1>
                <h1>Organic and Fresh</h1>
            </Col>
            </motion.div>
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
                    <>
                <p className='fw-bold text-secondary text-center info-p'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                 </>):

                <>
                <p className='fw-bold text-secondary text-center'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
               
                </> }
                
            </div>
            
            </Col>
        </Row>
        </section>
        
        {/* benefits */}
        <section className='mb-4'>
            <Row>
                <Col>
                    <p className='fw-bold text-secondary'>Benefits</p>
                </Col>
            </Row>
            <Row>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
                <Col>
                    <h1>Fountain of Youth</h1>
                    <h1>Glowing and Smooth</h1>
                </Col>
                </motion.div>
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
                {windowWidth>640?(
                    <>
                <p className='fw-bold text-secondary text-center info-p'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                </>):

                <>
                <p className='fw-bold text-secondary text-center'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                
                </> }
                
            </div>
                
                </Col>
            </Row>
        </section>

        {/* how to use */}
        <section className='mb-5'>
            <Row>
                <Col>
                    <p className='fw-bold text-secondary'>How to Use</p>
                </Col>
            </Row>
            <Row>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
                <Col>
                    <h1>Easy</h1>
                    <h1>Seamless</h1>
                </Col>
                </motion.div>
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
                    <>
                <p className='fw-bold text-secondary text-center info-p'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                 </>):

                <>
                <p className='fw-bold text-secondary text-center'>Ex culpa velit cillum Lorem dolor proident laboris in nisi magna do deserunt minim. Proident excepteur non eiusmod labore labore voluptate reprehenderit dolor nisi anim. Ipsum tempor veniam do dolore in sit ut mollit pariatur velit eiusmod. Qui duis amet aliquip cillum eu consequat et qui sint reprehenderit.</p>
                
                </> }
                
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