import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'

interface ProjectDetailProps {
  detail: ProjectDescription
}

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { detail } = props

  const images = React.useMemo(() => {
    const arr: Array<{ url: string }> = []

    detail.service_image.forEach((image) => {
      arr.push({ url: image })
    })

    return arr
  }, [detail.service_image])

  return (
    <article className={project.project_description_container}>
      <div className={project.project_description_body}>
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
