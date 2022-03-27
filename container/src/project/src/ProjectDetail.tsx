import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

interface ProjectDetailProps {
  detail: ProjectDescription
}

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { detail } = props

  const images = React.useMemo(() => {
    const arr: Array<ReactImageGalleryItem> = []

    detail.service_image.forEach((image) => {
      const options: ReactImageGalleryItem = {
        original: image,
        originalAlt: 'slide_image',
      }
      arr.push()
    })

    return arr
  }, [detail.service_image])

  return (
    <article className={project.project_description_container}>
      <div className={project.project_description_body}>
        <ImageGallery items={images} />
        <ul>
          <li>
            <p>name</p>
          </li>
          <li>
            <p>date: </p>
          </li>
          <li>
            <p>main Skills</p>
          </li>
          <li>
            <p>workers</p>
            <p></p>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default React.memo(ProjectDetail, isEqual)
