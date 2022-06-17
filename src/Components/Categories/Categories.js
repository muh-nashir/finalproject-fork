import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './categories.css'

const Categories = () => {
  return (
    <Container>
      <Row>
        <div className="mb-2 mt-4">
          <p className='text'>Telusuri Kategori</p>
          <Button className="btn btn-active categories">
          <i class="bi bi-search mx-1"></i> Semua
          </Button>
          <Button className="btn categories">
            <i class="bi bi-search mx-1"></i> Hobi
          </Button>
          <Button className="btn categories">
            <i class="bi bi-search mx-1"></i> Kendaraan
          </Button>
          <Button className="btn categories">
            <i class="bi bi-search mx-1"></i> Baju
          </Button>
          <Button className="btn categories">
            <i class="bi bi-search mx-1"></i> Elektronik
          </Button>
          <Button className="btn categories">
            <i class="bi bi-search mx-1"></i> Kesehatan
          </Button>
        </div>
      </Row>
    </Container>
  )
}

export default Categories