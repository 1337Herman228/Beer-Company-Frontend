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
import { useRef, useEffect } from 'react';

// import { removeSubNavbar, showDrinks, showCompany, fullTitlesAndLinks } from '../../slices/basicSlice';
import { 
  showSubNavbar,
  hideSubNavbar,
  hideSubNavbarLVL2,
  fullTitlesAndLinks,
} from '../../slices/basicSlice';


import gsap, { distribute } from "gsap";
import { useGSAP } from "@gsap/react";

const NavScrollExample = ()=> {

  const subNavbarRef = useRef(null);

  const {
    subNavbar, 
    subNavIsActive,
    prevSubNavbar
  } = useSelector(state => state.basic);

  const dispatch = useDispatch();

  const handleClick = (type) => {
        if (!subNavIsActive) {

            dispatch(showSubNavbar(type));
            dispatch(fullTitlesAndLinks());
            dispatch(hideSubNavbarLVL2());
            gsap.from(subNavbarRef.current, {duration: 0.2, alpha: 0,x: -100, ease: 'power3.in'});

          
        } else if (prevSubNavbar !== subNavbar) {

          gsap.from(subNavbarRef.current, {duration: 0.2, alpha: 0, x: -100, ease: 'power3.in'});
            dispatch(showSubNavbar(type));
            dispatch(fullTitlesAndLinks());
            dispatch(hideSubNavbarLVL2());
          
        }
  };


  return (
    <>
    <Navbar style={{display: 'block'}} fixed="top" expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand href="#"><Logo className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <button
                className="dropdown"
                onClick={() => handleClick('drinks')}
                >
              <span className= {`nav-text ${subNavbar==='drinks'? 'active' : ''}`}  >Напитки</span>
              </button>

              <button
                className="dropdown"
                onClick={() => handleClick('company')}
                >
              <span className= {`nav-text ${subNavbar==='company'? 'active' : ''}`}  >Компания</span>
              </button>
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

        <div ref = {subNavbarRef}>
          {subNavbar!=='none' ? <SubNavbar /> : null}
        </div>

    </Navbar>

    
    </>
  );
}

export default NavScrollExample;