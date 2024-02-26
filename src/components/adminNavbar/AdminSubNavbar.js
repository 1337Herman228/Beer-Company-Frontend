import '../navbar/Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-bootstrap';
import {forwardRef, useRef, useEffect } from 'react';

import { 
    showSubNavbar,
    showSubNavbarLVL2,
    fullTitlesAndLinks,
  } from '../../slices/navbarSlice';

import { useDispatch, useSelector } from 'react-redux';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const AdminSubNavbar = ()=> {

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
                fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {subNavbar === 'accounts' ? <AccountsNav/> : null}
                    {subNavbar === 'products' ? <ProductsNav/> : null}

                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </div>
  );
}

const AccountsNav = () => {
    return (
        <>
        <Nav.Link
            className='subnav-button'
            style={{color: 'white', fontWeight:500, marginRight:5}} 
            href="/roles">
                <span className= 'subnav-text'>Роли</span>
        </Nav.Link>
        
        <Nav.Link
            className='subnav-button'
            style={{color: 'white', fontWeight:500, marginRight:5}} 
            href="/add-new-role">
                <span className= 'subnav-text'>Добавить роль</span>
        </Nav.Link>

        <Nav.Link
            className='subnav-button'
            style={{color: 'white', fontWeight:500, marginRight:5}} 
            href="#accounts">
                <span className= 'subnav-text'>Учётные записи</span>
        </Nav.Link>

        <Nav.Link
            className='subnav-button'
            style={{color: 'white', fontWeight:500, marginRight:5}} 
            href="#add-new-account">
                <span className= 'subnav-text'>Добавить учётную записи</span>
        </Nav.Link>
        </>
    )
}

const ProductsNav = () => {
    return (
        <>
        <Nav.Link
            className='subnav-button'
            style={{color: 'white', fontWeight:500, marginRight:5}} 
            href="#products">
                <span className= 'subnav-text'>Товары</span>
        </Nav.Link>
        
        <Nav.Link
            className='subnav-button'
            style={{color: 'white', fontWeight:500, marginRight:5}} 
            href="#add-new-product">
                <span className= 'subnav-text'>Добавить новый товар</span>
        </Nav.Link>
        </>
    )
}
    
export default AdminSubNavbar;