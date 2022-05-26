import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import project from 'styles/project.module.scss'

interface ProjectThumnailComponentProps {
  onClick: (path: string, key: string) => void
  imagePath: string
  name: string
}

const ProjectThumnailComponent: React.FC<ProjectThumnailComponentProps> = (
  props
) => {
  const { onClick, imagePath, name } = props

  const handleClick = React.useCallback(() => {
    onClick(imagePath, name)
  }, [])

  return (
    <picture className={project.thumbnail_image} onClick={handleClick}>
      <figure>
        <Image
          src={imagePath}
          layout="fill"
          priority
          objectFit="contain"
          alt="thumnail_image"
        />
      </figure>
    </picture>
  )
}

export default React.memo(ProjectThumnailComponent, isEqual)
