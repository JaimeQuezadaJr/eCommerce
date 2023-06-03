import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { motion } from 'framer-motion';


const NavBar = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
      
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
      <Navbar bg="light" variant='light' expand='sm' className='fixed-top'>
        <Container>
          <Navbar.Brand as={Link} to="/"><img
                alt=""
                src="logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}glow</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {loggedIn ? (
                <Nav className=" justify-contend-end">
                  <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
                  <Nav.Link as={Link} to="/nutrition">Search</Nav.Link>
                  <Nav.Link onClick={onLogOut}>Logout</Nav.Link>
              </Nav>
            ) : (
                <Nav className=" justify-contend-end">
                  <Nav.Link as={Link} to="/login">Products</Nav.Link>
                  <Nav.Link as={Link} to="/register">About</Nav.Link>
                  <Nav.Link as={Link} to="/register">Contact</Nav.Link>
                  <Nav.Link as={Link} to="/cart"><img
                alt=""
                src="shopbag.png"
                width="22"
                height="22"
                className="d-inline-block align-top"
              /> <Badge bg="secondary">2</Badge></Nav.Link>
                </Nav>
            )}
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </motion.div>
      </>
      
    );
  }
  
  export default NavBar;