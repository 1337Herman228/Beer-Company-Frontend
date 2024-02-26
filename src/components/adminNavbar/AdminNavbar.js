import '../navbar/Navbar.css';
import { ReactComponent as Logo } from '../navbar/logo.svg'
import AdminSubNavbar from './AdminSubNavbar';

import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRef } from 'react';


import { 
  showSubNavbar,
  activateSnow,
  disactivateSnow,
  hideSubNavbarLVL2,
  fullTitlesAndLinks,
} from '../../slices/navbarSlice';

import gsap from "gsap";

import Snowflake from '../snow/snowflake';

const AdminNavbar = ()=> {

  const subNavbarRef = useRef(null);

  const {
    subNavbar, 
    subNavIsActive,
    prevSubNavbar,
    isSnow
  } = useSelector(state => state.basic);

  const dispatch = useDispatch();

  const handleClick = (type) => {
        if (!subNavIsActive) {

            dispatch(showSubNavbar(type));
            dispatch(fullTitlesAndLinks());
            dispatch(hideSubNavbarLVL2());
            gsap.from(subNavbarRef.current, {duration: 0.3, alpha: 0,x: -100, ease: 'power3.in'});

          
        } else if (prevSubNavbar !== subNavbar) {

          gsap.from(subNavbarRef.current, {duration: 0.3, alpha: 0, x: -100, ease: 'power3.in'});
            dispatch(showSubNavbar(type));
            dispatch(fullTitlesAndLinks());
            dispatch(hideSubNavbarLVL2());
          
        }
  };

  const onChangeSnow = () => {
    if (!isSnow) {
      dispatch(activateSnow());
    } else {
      dispatch(disactivateSnow());
    }
  }


  return (
    <>
    <Navbar style={{display: 'block'}} fixed="top" expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand href="/"><Logo className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <button
                className="dropdown"
                onClick={() => handleClick('accounts')}
                >
              <span className= {`nav-text ${subNavbar==='accounts'? 'active' : ''}`}  >Учётные записи</span>
              </button>

              <button
                className="dropdown"
                onClick={() => handleClick('products')}
                >
              <span className= {`nav-text ${subNavbar==='products'? 'active' : ''}`}  >Товары</span>
              </button>
          </Nav>

          <Button onClick={onChangeSnow} variant='outline-dark' className='snow-button'>
            <Snowflake width={30} height={30} color="rgb(15, 148, 201)"/>
          </Button>

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
          {subNavbar!=='none' ? <AdminSubNavbar /> : null}
        </div>

    </Navbar>

    
    </>
  );
}

export default AdminNavbar;