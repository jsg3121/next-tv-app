import { ProjectDetail, ProjectThumbnail } from 'components'
import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import React from 'react'
import project from 'styles/project.module.scss'

interface ProjectProps {
  data: ProjectData
}

interface DetailData {
  images: Array<string>
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props
  const [detail, setDetail] = React.useState<DetailData>()
  const projectRef = React.useRef<HTMLDivElement>(null)

  const handleClickThumnail = React.useCallback((path: string) => {
    if (path) {
      gsap
        .timeline()
        .to(projectRef.current, {
          opacity: 0,
          duration: 0.1,
        })
        .to(projectRef.current, {
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${path}') center/cover no-repeat `,
          duration: 0,
        })
        .to(projectRef.current, {
          opacity: 1,
          duration: 0.1,
        })
    }
  }, [])

  React.useEffect(() => {
    if (data) {
      const detailData = {
        images: data[0].service_image,
      }

      setDetail(detailData)
    }
  }, [data])

  return (
    <article id="project" className={project.container}>
      <div className={project.container_background} ref={projectRef}></div>
      <div className={project.thumbnail_container}>
        {data &&
          data.map((list) => {
            return (
              <ProjectThumbnail
                key={list.name}
                imagePath={list.thumbnail_image}
                onClick={handleClickThumnail}
                name={list.name}
              />
            )
          })}
      </div>
      <div className={project.detail_container}>
        {detail && <ProjectDetail detailData={detail} />}
      </div>
    </article>
  )
}

export default React.memo(Project, isEqual)
