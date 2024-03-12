import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ height: '330px' }} className='w-100 bg-dark'>
            <div className="container footer-content d-flex justify-content-between text-white mt-5">
                <div style={{ width: '400px' }} className="media">
                    <h4 className='d-flex'><i style={{ height: '25px' }} className="fa-solid fa-person-biking me-3"></i>MotoView</h4>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elitt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <span>Code Licensed MIT, docs CC BY 3.0.</span><br />
                    <span>Currently v5.3.2.</span>
                </div>

                <div className="links d-flex flex-column">
                    <h5 className='d-flex'> Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }}>Models</Link>
                    <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>History</Link>
                </div>

                <div className="contact">
                    <h5>Contact Us</h5>
                    <div className="d-flex">
                        <input type="text" className="form-control me-1" placeholder='Email Id Please' />
                        <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                    <div className="icons d-flex justify-content-between mt-3">
                        <a href="https://twitter.com/i/flow/login" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/login/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/login" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.github.com/login" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github"></i></a>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-phone"></i></a>
                    </div>
                </div>

            </div>
            <p className='text-center mt-3 text-white'>Copyright &copy; 2024 MotoView. Built with React.</p>
        </div>
    )
}

export default Footer