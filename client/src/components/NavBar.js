import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';


const NavBar = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
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
      
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/current-user', { withCredentials: true })
        .then((res) => {
          setUser(res.data);
          setLoggedIn(true);
        })
        .catch((err) => console.log());
    }, [loggedIn])

  
    const onLogOut = () => {
      axios
      .post('http://localhost:8000/logout',{}, { withCredentials: true })
      .then((res) => {
          setUser(null);
          setLoggedIn(false);
          navigate('/')
      })
      .catch((err) => console.log(err));
    };
  
    return (
      <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
      <Navbar bg="light" variant='light' className='fixed-top'>
        <Container>
          <Navbar.Brand as={Link} to="/"><img
                alt=""
                src="smooth.png"
                width="50"
                height="30"
                className="d-inline-block align-top hide-bg"
              />{' '}francois</Navbar.Brand>
                {windowWidth<640?(
                  <Nav className=" justify-contend-end">
                    <Nav.Link as={Link}><i className="bi bi-list" onClick={handleShow2}></i></Nav.Link>
                      <Offcanvas placement='end' show={show2} onHide={handleClose2}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Products</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                    <Nav className=" justify-contend-end">
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show2} onClick={handleClose2}>Face</Nav.Link></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show2} onClick={handleClose2}>Body</Nav.Link></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show2} onClick={handleClose2}>Wellness</Nav.Link></motion.div>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
                <Nav.Link as={Link}><i className="bi bi-search" onClick={handleShow1}></i></Nav.Link>
                      <Offcanvas placement='end' show={show1} onHide={handleClose1}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Products</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-dark">Search</Button>
                        </Form>
                  </Offcanvas.Body>
                </Offcanvas>
                <Nav.Link as={Link}><i className="bi bi-bag" onClick={handleShow}></i><i className="bi bi-1-circle-fill"></i></Nav.Link>
                      <Offcanvas placement='end' show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Hello</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                    <Nav className=" justify-contend-end">
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show} onClick={handleClose}>Login</Nav.Link></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show} onClick={handleClose}>Register</Nav.Link></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show} onClick={handleClose}>Orders</Nav.Link></motion.div>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
                </Nav>
                ):(
                  
                  <Nav className=" justify-contend-end">
                  <Nav.Link style={{fontSize:'small'}} as={Link} to="/productinfo" className='d-flex align-items-center'>Face</Nav.Link>
                  <Nav.Link style={{fontSize:'small'}}  as={Link} to="/login"className='d-flex align-items-center'>Body</Nav.Link>
                  <Nav.Link style={{fontSize:'small'}} as={Link} to="/login" className='d-flex align-items-center'>Wellness</Nav.Link>
                  <Nav.Link as={Link}><i className="bi bi-search" onClick={handleShow1}></i></Nav.Link>
                      <Offcanvas placement='end' show={show1} onHide={handleClose1}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Products</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-dark">Search</Button>
                        </Form>
                  </Offcanvas.Body>
                </Offcanvas>
                  <Nav.Link as={Link}><i className="bi bi-bag" onClick={handleShow}></i><i className="bi bi-1-circle-fill"></i></Nav.Link>
                      <Offcanvas placement='end' show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Hello</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                    <Nav className=" justify-contend-end">
                      <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show} onClick={handleClose}>Login</Nav.Link></motion.div>
                      <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show} onClick={handleClose}>Register</Nav.Link></motion.div>
                      <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/productinfo" show={show} onClick={handleClose}>Orders</Nav.Link></motion.div> 
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
                </Nav>
                )}
                
        </Container>
      </Navbar>
      </motion.div>
      </>
      
    );
  }
  
  export default NavBar;