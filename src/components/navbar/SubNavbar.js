import './Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-bootstrap';
import {forwardRef, useRef, useEffect } from 'react';

// import { activateSubNav, removeSubNavbar, disactivateSubNav, activateSubNavLVL2, disactivateSubNavLVL2, showSubNavbarLVL2, removeSubNavbarLVL2 } from '../../slices/basicSlice';
import { 
    showSubNavbar,
    showSubNavbarLVL2,
    fullTitlesAndLinks,
  } from '../../slices/basicSlice';

import { useDispatch, useSelector } from 'react-redux';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SubNavbarLVL2 from './SubNavbarLVL2'


const SubNavbar = ()=> {

    const subNavbarRef = useRef(null);

    const {
        subNavbar,
        titlesAndLinks,
        subNavbarLVL2, 
        subNavLVL2IsActive,
        prevSubNavbarLVL2
    } = useSelector(state => state.basic);


    const dispatch = useDispatch();

    const handleClick = (type) => {
        if (!subNavLVL2IsActive) {
          dispatch(showSubNavbarLVL2(type));
          dispatch(fullTitlesAndLinks());
          gsap.from(subNavbarRef.current, {duration: 0.3, alpha: 0,x: -100, ease: 'power3.in'});

        } else if (prevSubNavbarLVL2 !== subNavbarLVL2) {
          dispatch(showSubNavbarLVL2(type));
          dispatch(fullTitlesAndLinks());
          gsap.from(subNavbarRef.current, {duration: 0.3, alpha: 0,x: -100, ease: 'power3.in'});

        }
  };

        return(
            <div>
            <Navbar
                expand="lg" 
                className="subnavbar">
            <Container  
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave} 
                fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {titlesAndLinks.map((el) => {
                        if(el.link === 'none'){
                            return(
                                <button
                                    className='subnav-button'
                                    onClick={() => handleClick(el.title)}
                                    key = {el.title}
                                    style={{color: 'white', fontWeight:500, marginRight:5}} 
                                    // href={el.link}
                                    >
                                        <span className= {`subnav-text ${ subNavbarLVL2=== el.title ? 'active' : ''}`}>{el.title}</span>
                                </button>
                            )
                        }
                        else{
                            return(
                                <Nav.Link
                                    className='subnav-button'
                                    // onClick={() => handleClick(el.title)}
                                    key = {el.title}
                                    style={{color: 'white', fontWeight:500, marginRight:5}} 
                                    href={el.link}
                                    >
                                        <span className= {`subnav-text ${ subNavbarLVL2=== el.title ? 'active' : ''}`}>{el.title}</span>
                                </Nav.Link>
                            )
                        }
                       
                    })}
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div ref = {subNavbarRef}>           
                {subNavbarLVL2!=='none' ? <SubNavbarLVL2 /> : null}
            </div>

        </div>
  );


}
    
export default SubNavbar;