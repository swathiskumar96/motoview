import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Models() {
  const [removeCategoryVideoResponse, setRemoveCategoryVideoResponse] = useState("")
  const [uploadVideoResponse, setUploadVideoResponse] = useState("")

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse} />
        <Link to={'/history'}>View History</Link>
      </div>

      <div className="container-fluid ms-2 mt-5 mb-5 row">
        <div className="col-lg-9">
          <h3>Models</h3>
          <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse} />
        </div>

        <div className="col-lg-3">
          <Category />
        </div>
      </div>
    </>
  )
}

export default Models