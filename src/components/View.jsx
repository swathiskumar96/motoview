import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({ uploadVideoRespose, setRemoveCategoryVideoResponse }) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoResponce, setDeleteVideoResponse] = useState("")

  const getAllVideos = async () => {
    const result = await getAllVideosAPI()
    if (result?.status == 200) {
      setAllVideos(result?.data);
    }
  }

  useEffect(() => {
    getAllVideos()
  }, [uploadVideoRespose, deleteVideoResponce])

  const dragOverView = (e) => {
    e.preventDefault()
  }

  const handleCategoryVideo = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove Video Id: ${videoId} from category Id:${categoryId}`);
    const { data } = await getSingleCategoryAPI(categoryId)
    const updatedVideoList = data.allVideos.filter(item => item.id != videoId)
    console.log(updatedVideoList);
    const { id, categoryName } = data
    const result = await updateCategoryAPI(categoryId, { id, categoryName, allVideos: updatedVideoList })
    setRemoveCategoryVideoResponse(result.data)
  }

  return (
    <>
      <Row droppable="true" onDragOver={e => dragOverView(e)} onDrop={e => handleCategoryVideo(e)}>
        {allVideos?.length > 0 ? allVideos?.map((video, index) => (
          <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
            <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
          </Col>
        ))
          :
          <div className='text-danger fw-bolder'> No Models are uploaded</div>
        }
      </Row>
    </>
  )
}

export default View