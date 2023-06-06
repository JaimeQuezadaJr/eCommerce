import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';


const NavBar = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
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
                src="logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}</Navbar.Brand>
                {windowWidth<640?(
                  <Nav className=" justify-contend-end">
                  <Nav.Link as={Link} to="/login"><i className="bi bi-list"></i></Nav.Link>
                  <Nav.Link as={Link} to="/register"><i className="bi bi-search"></i></Nav.Link>
                  <Nav.Link as={Link} to="/cart"><i className="bi bi-bag"></i><i className="bi bi-1-circle-fill"></i></Nav.Link>
                </Nav>
                ):(
                  <Nav className=" justify-contend-end">
                  <Nav.Link style={{fontSize:'small'}} as={Link} to="/login">Face</Nav.Link>
                  <Nav.Link style={{fontSize:'small'}} as={Link} to="/login">Body{windowWidth}</Nav.Link>
                  <Nav.Link style={{fontSize:'small'}} as={Link} to="/login">Wellness</Nav.Link>
                  <Nav.Link as={Link} to="/register"><i className="bi bi-search"></i></Nav.Link>
                  <Nav.Link as={Link} to="/cart"><i className="bi bi-bag"></i><i className="bi bi-1-circle-fill"></i></Nav.Link>
                </Nav>
                )}
                
        </Container>
      </Navbar>
      </motion.div>
      </>
      
    );
  }
  
  export default NavBar;