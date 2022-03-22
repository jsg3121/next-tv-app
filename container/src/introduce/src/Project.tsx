import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import { ProjectCard, ProjectDetail } from '../../../src/project'

interface ProjectProps {
  data: ProjectData
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props
  const [isShow, setIsShow] = React.useState<boolean>(true)

  return (
    <article id="project" className={project.container}>
      <div>
        {data &&
          data.map((item, index: number) => {
            return (
              <ProjectCard
                thumbnail={item.service_image[0]}
                backgroundColor={item.backgroundColor}
                key={index}
              />
            )
          })}
      </div>

      {isShow && data && <ProjectDetail detail={data[0]} />}
    </article>
  )
}

export default React.memo(Project, isEqual)
