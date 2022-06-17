import React from 'react'
import { Button, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import './navbar.css'

const navbar = () => {
  return (
    <Container>
      <Row>
        <nav className="navbar navbar-expand navbar-light">
          <a className="navbar-brand" href="#">
            <div className='logo'></div>

            <InputGroup className="search-bar">
              <Form.Control
                placeholder="Cari di sini ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className='input-bar'
              />
              <Button variant="outline-none btn-search" id="button-addon2">
                <i class="bi bi-search mx-1 icon-search"></i>
              </Button>
            </InputGroup>
          </a>

          <Button variant="outline-secondary" id="button-addon2" className="masuk">
          <i class="bi bi-box-arrow-in-right cta-masuk"></i>Masuk
          </Button>
        </nav>
      </Row>
    </Container>
  )
}

export default navbar