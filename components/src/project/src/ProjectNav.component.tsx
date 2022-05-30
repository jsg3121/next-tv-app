import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Image from 'next/image'

interface ProjectNavComponentProps {
  index: number
  navList: Array<string>
}

const ProjectNavComponent: React.FC<ProjectNavComponentProps> = (props) => {
  const { navList, index, ...rest } = props

  return (
    <div className={project.project_navigation} {...rest}>
      <picture>
        <figure>
          <Image
            src={navList[index]}
            layout="fill"
            alt="nav_image"
            objectFit="cover"
            priority
          />
        </figure>
      </picture>
    </div>
  )
}

export default React.memo(ProjectNavComponent, isEqual)
