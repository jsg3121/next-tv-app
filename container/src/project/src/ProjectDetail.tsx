import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

interface ProjectDetailProps {
  detail: ProjectDescription
}

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { detail } = props

  console.log(detail)

  const images = React.useMemo(() => {
    const arr: Array<ReactImageGalleryItem> = []

    detail.service_image.forEach((image) => {
      const options: ReactImageGalleryItem = {
        original: image,
        originalAlt: 'slide_image',
        originalWidth: 300,
        originalHeight: 300,
      }
      arr.push(options)
    })

    return arr
  }, [detail.service_image])

  return (
    <article className={project.project_description_container}>
      <div className={project.project_description_body}>
        <div className={project.project_slide_container}>
          <ImageGallery
            autoPlay
            items={images}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
            slideDuration={300}
          />
        </div>
        <ul>
          <li>
            <p>name</p>
            <span>{detail.name}</span>
          </li>
          <li>
            <p>date: {detail.date}</p>
          </li>
          <li>
            <p>main Skills : {detail.skills}</p>
          </li>
          <li>
            <p>workers</p>
            <span>total: {detail.workers.total}</span>
            <span>developer: {detail.workers.developer}</span>
            <span>design: {detail.workers.design}</span>
          </li>
          {detail.url && (
            <li>
              <p>url: {detail.url}</p>
            </li>
          )}
          {detail.git && (
            <li>
              <p>git : {detail.git}</p>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}

export default React.memo(ProjectDetail, isEqual)
