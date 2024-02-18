import './Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch, useSelector } from 'react-redux';

import { 
    showSubNavbar,
    hideSubNavbar,
    fullTitlesAndLinks,
  } from '../../slices/basicSlice';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SubNavbarLVL2 = ()=> {

    const {titlesAndLinks,subNavbarLVL2} = useSelector(state => state.basic);

    const img = titlesAndLinks.filter(el => el.title === subNavbarLVL2)
    const imgArr = img[0].img

    const dispatch = useDispatch();

    return(
        <div style={{height:200}}>
            <Navbar 
            className="subnavbar-lvl2"
                // expand="lg" 
                >
            <Container  
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave} 
                fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {imgArr.map((el,i) => {
                        return(
                            <Nav.Link
                                key = {i}
                                style={{color: 'white', fontWeight:500, marginRight:5}} 
                                href={el.link}>
                                    <img className={`subnavbar-lvl2-img ${el.mini=='true'? 'mini' : ''}`} src={el.src} />
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