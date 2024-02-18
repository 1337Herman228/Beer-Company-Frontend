import './Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { activateSubNav, disactivateSubNav, removeSubNavbar, activateSubNavLVL2, removeSubNavbarLVL2, disactivateSubNavLVL2 } from '../../slices/basicSlice';
import { useDispatch, useSelector } from 'react-redux';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SubNavbarLVL2 = ()=> {

    let timeoutId;
    const handleMouseEnter = () => {
            dispatch(activateSubNav());
            dispatch(activateSubNavLVL2());
            // dispatch(showDrinks());
      };
    const handleMouseLeave = () => {
    clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            dispatch(disactivateSubNavLVL2());
            dispatch(removeSubNavbarLVL2());
            dispatch(disactivateSubNav());
            if(!subNavActive){
                dispatch(removeSubNavbar());
            }
        }, 200);
    };

    const {titlesAndLinks, subNavbarLVL2,subNavActive, SubNavbar, prevSubNavbar} = useSelector(state => state.basic);
    const dispatch = useDispatch();

    return(
        <div>
            <Navbar
                expand="lg" 
                className="subnavbar-lvl2">
            <Container  
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {titlesAndLinks.map((el) => {
                        return(
                        <Nav.Link
                            key = {el.title}
                            style={{color: 'white', fontWeight:500, marginRight:5}} 
                            href={el.link}>
                                <img className='subnavbar-lvl2-img' src='https://lidskae.by/assets/img/menu/drinks/chiilz.png' />
                        </Nav.Link>
                        )
                    })}
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default SubNavbarLVL2;