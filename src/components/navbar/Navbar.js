import './Navbar.css';
import myImage from './snowflake.png';
import { ReactComponent as Logo } from './logo.svg'
import SubNavbar from './SubNavbar';

import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { removeSubNavbar, showDrinks, showCompany, fullTitlesAndLinks } from '../../slices/basicSlice';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import drinksJSON from './drinks.json'


const NavScrollExample = ()=> {
  
  // const drinksArray = drinksJSON.drinks;
  // // console.log(drinksArray)

  const {subNavbar, subNavActive} = useSelector(state => state.basic);
  const dispatch = useDispatch();

  let timeoutId;
  const handleMouseEnter = (func) => {
      clearTimeout(timeoutId);
      dispatch(func());
      dispatch(fullTitlesAndLinks());
  };
  
  
  const handleMouseLeave = (func) => {
    clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
           dispatch(func());
      }, 200);
  };

  return (
    <>
    <Navbar style={{display: 'block'}} fixed="top" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#"><Logo className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            {/* <NavDropdown
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                title="Напитки"
                id="navbarScrollingDropdown">
            </NavDropdown> */}


            <Nav.Link
                className="dropdown"
                onMouseEnter={() => handleMouseEnter(showDrinks)}
                onMouseLeave={() => handleMouseLeave(removeSubNavbar)}>
              <span className= {`nav-text ${subNavbar==='drinks'? 'active' : ''}`}  >Напитки</span>
              </Nav.Link>

              <Nav.Link
                className="dropdown"
                onMouseEnter={() => handleMouseEnter(showCompany)}
                onMouseLeave={() => handleMouseLeave(removeSubNavbar)}>
              <span className= {`nav-text ${subNavbar==='company'? 'active' : ''}`}  >Компания</span>
              </Nav.Link>


           
          </Nav>
{/* 
          <Button variant="outline-light" className='snow-button'>
            <img className='snowflake' src={myImage} alt="My Image" />
            </Button> */}
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

            {subNavbar!=='none' ? <SubNavbar/> : null}
            {/* {subNavbar!=='none' && destroying === false ? <SubNavbar/> : null} */}
            {/* <SubNavbar/> */}

    </Navbar>

    
    </>
  );
}

export default NavScrollExample;