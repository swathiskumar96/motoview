import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal, } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({ setUploadVideoResponse }) {
  const [uploadVideo, setUploadVideo] = useState({ caption: "", imageURL: "", youtubeLink: "" })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({ ...uploadVideo, caption: "", imageURL: "", youtubeLink: "" })
  }

  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      setUploadVideo({ ...uploadVideo, youtubeLink: `https://www.youtube.com/embed/${videoId}` })
    } else {
      setUploadVideo({ ...uploadVideo, youtubeLink: "" })
      alert("Input proper video link")
    }
  }

  const handleUpload = async () => {
    const { caption, imageURL, youtubeLink } = uploadVideo
    if (caption && imageURL && youtubeLink) {
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert(`video '${result.data.caption}' uploaded successfully`)
        setUploadVideoResponse(result.data)
        handleClose()
      } else {
        alert("API Call Failed... please try after some time ")
      }
    } else {
      alert("please fill the form completely")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Add Model</h5>
        <button onClick={handleShow} className='btn bg-info text-white ms-2'><i className="fa-solid fa-plus"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Model Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Model Name"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Model Name"></Form.Control>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImg"
              label="Model Image"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.imageURL} onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })} type="text" placeholder="Model Image"></Form.Control>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputLink"
              label="Model Video"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.youtubeLink} onChange={e => getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Model Video"></Form.Control>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add