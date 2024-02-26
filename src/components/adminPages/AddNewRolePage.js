import './AddNewRolePage.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHttp } from "../../hooks/http.hook";
// import InputGroup from 'react-bootstrap/InputGroup';


const AddNewRolePage = ()=>{

    const [validated, setValidated] = useState(false);

    const {requestPromise} = useHttp()

    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }
        else{
        setValidated(false);
        event.preventDefault();
        event.stopPropagation();
        const inputValue = form.querySelector('input[name="position"]').value;
        await requestPromise(`http://localhost:8080/admin/add-new-role`,'POST', JSON.stringify({ position: inputValue }))
        }
    
      };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Container className="add-new-role-form">
      <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
        <Col xs="auto">
            <h3>Добавить новую роль</h3>
            <FloatingLabel
                style={{color: 'black'}}
                controlId="floatingInput"
                label="Название роли"
                className="mb-2 add-new-role-label"
            >
                <Form.Control name="position" required type="text" placeholder="" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </FloatingLabel>
            <Button style={{backgroundColor: 'green', borderColor: 'green'}} type="submit">Submit form</Button>
        </Col>
      </Row>
    </Container>
    </Form>
    </>
  )
    
}

export default AddNewRolePage