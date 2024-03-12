import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='fw-bolder d-flex align-items-center fs-3' style={{ color: 'white' }}>
            <i className="fa-solid fa-person-biking me-3"></i>{' '}
            MotoView
          </Navbar.Brand>
        </Link>

        <div>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='me-4'>Home</Link>
          <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }} className='me-4'>Models</Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>History</Link>
        </div>

      </Container>
    </Navbar>
  )
}

export default Header