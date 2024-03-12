import React from 'react'
import { Card } from 'react-bootstrap'

function Home() {
  return (
    <>
      <div>
        <img style={{ height: '120vh', width: '100%' }} src="./images/Bike1.jpg" alt="" />
      </div>

      <div className="features container mt-5">
        <h1 className="text-center fw-bolder">Features</h1>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ height: '400px', width: '22rem' }}>
              <Card.Img height={'320px'} variant="top" src="./images/Bike2.jpg" />
              <h4 className='mt-4 text-center fw-bolder'>Models</h4>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card style={{ height: '400px', width: '22rem' }}>
              <Card.Img height={'320px'} variant="top" src="./images/Bike4.jpg" />
              <h4 className='mt-4 text-center fw-bolder'>Images</h4>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card style={{ height: '400px', width: '22rem' }}>
              <Card.Img height={'320px'} variant="top" src="./images/Bike3.jpg" />
              <h4 className='mt-4 text-center fw-bolder'>Videos</h4>
            </Card>
          </div>
        </div>
      </div>

      <div className='Categories container mt-5'>
        <h1 className='text-center fw-bolder'>Categories</h1>
        <div className='row mt-5'>
          <div className='col-lg-6'>
            <img style={{ height: '400px', width: '100%' }} src="./images/Bike5.jpg" alt="" />
            <h4 className='mt-3 text-center fw-bolder'>#Sports</h4>
          </div>

          <div className='col-lg-6'>
            <img style={{ height: '400px', width: '100%' }} src="./images/Bike6.jpg" alt="" />
            <h4 className='mt-3 text-center fw-bolder'>#Adventure</h4>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='col-lg-6'>
            <img style={{ height: '400px', width: '100%' }} src="./images/Bike7.jpg" alt="" />
            <h4 className='mt-3 text-center fw-bolder'>#Cruiser</h4>
          </div>

          <div className='col-lg-6'>
            <img style={{ height: '400px', width: '100%' }} src="./images/Bike8.jpg" alt="" />
            <h4 className='mt-3 text-center fw-bolder'>#EV</h4>
          </div>
        </div>
      </div>

      <div className='cover mt-5'>
        <img style={{ height: '400px', width: '100%' }} src="./images/Bike9.jpg" alt="" />
      </div>
    </>
  )
}

export default Home