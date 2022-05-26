import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import React from 'react'
import project from 'styles/project.module.scss'
import { gsap } from 'gsap'
import { ProjectThumbnail } from 'components/src/project'

interface ProjectProps {
  data: ProjectData
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props

  const projectRef = React.useRef<HTMLDivElement>(null)
  console.log(data)

  const handleClickThumnail = React.useCallback((val: string) => {
    if (val) {
      gsap
        .timeline()
        .to(projectRef.current, {
          opacity: 0,
          duration: 0.1,
        })
        .to(projectRef.current, {
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${val}') center/cover no-repeat `,
          duration: 0,
        })
        .to(projectRef.current, {
          opacity: 1,
          duration: 0.1,
        })
    }
  }, [])

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
              />
            )
          })}
      </div>
    </article>
  )
}

export default React.memo(Project, isEqual)
