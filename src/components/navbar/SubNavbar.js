import './Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-bootstrap';
import { useRef, useEffect } from 'react';

import { activateSubNav, removeSubNavbar, disactivateSubNav, activateSubNavLVL2, disactivateSubNavLVL2, showSubNavbarLVL2, removeSubNavbarLVL2 } from '../../slices/basicSlice';
import { useDispatch, useSelector } from 'react-redux';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SubNavbarLVL2 from './SubNavbarLVL2'


const SubNavbar = ()=> {

    const subNavbarRef = useRef(null);

    const {titlesAndLinks, subNavbarLVL2, SubNavbar, subNavLVL2Active, prevSubNavbar} = useSelector(state => state.basic);
    const dispatch = useDispatch();

    let timeoutId;
    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
            dispatch(activateSubNav());
            // dispatch(showDrinks());
      };
    
      const handleMouseLeave = () => {
        if(subNavLVL2Active){
            return
        }
        else{
            remove()
            clearTimeout(timeoutId);
                // если при задержке в 50мс происходит изменения SubNavbar на другое значение,то нужно либо сразу убрать савнавбар, либо отменить операцию removeSubNavbar
                    timeoutId = setTimeout(() => {
                        if(prevSubNavbar!=SubNavbar ){
                        dispatch(disactivateSubNav());
                        dispatch(removeSubNavbar());

                            // timeoutId = setTimeout(() => {
                            //    if(!subNavLVL2Active){
                            //     dispatch(disactivateSubNavLVL2());
                            //     dispatch(removeSubNavbarLVL2());
                            //    }
                            // }, 100);
                        

                    }
                    else{
                        timeoutId = setTimeout(() => {
                            dispatch(disactivateSubNav());
                            dispatch(removeSubNavbar());
                            dispatch(disactivateSubNavLVL2());
                            dispatch(removeSubNavbarLVL2());
                        }, 200);
                    }
                    }, 50);
        }
      };

      let timeoutId2;
      const showSubNavLVL2 = (title)=>{
        clearTimeout(timeoutId2);
        timeoutId = setTimeout(() => {
            dispatch(showSubNavbarLVL2(title));
        }, 200);
      }
      const hideSubNavLVL2 = ()=>{
        clearTimeout(timeoutId2);
        timeoutId = setTimeout(() => {
            dispatch(removeSubNavbarLVL2());
        }, 200);
      }



    useGSAP(() => {
        gsap.from(subNavbarRef.current, {duration: 0.2, alpha: 0, ease: 'power3.in'});
      })

    const { contextSafe } = useGSAP({ scope: subNavbarRef });

    const remove = contextSafe(() => {
        gsap.to(subNavbarRef.current, {
        duration: 0.1,
        alpha: 0,
        onComplete: () => {
           return 
        }
        });
    });

        return(
            <div className='subnavbar-main-div' ref={subNavbarRef}>
            <Navbar
                expand="lg" 
                className="subnavbar">
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
                            onMouseEnter={() => showSubNavLVL2(el.title)}
                            onMouseLeave={() => hideSubNavLVL2()}
                            key = {el.title}
                            style={{color: 'white', fontWeight:500, marginRight:5}} 
                            href={el.link}>
                                <span className='subnav-text'>{el.title}</span>
                        </Nav.Link>
                        )
                    })}
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>

            {subNavbarLVL2!=='none' ? <SubNavbarLVL2/> : null}

        </div>
  );


}
export default SubNavbar;