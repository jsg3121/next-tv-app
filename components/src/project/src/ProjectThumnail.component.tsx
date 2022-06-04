import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import React from 'react'
import project from 'styles/project.module.scss'

interface ProjectThumnailComponentProps {
  onClick?: (path: string, key: string) => void
  imagePath: string
  name: string
}

const ProjectThumnailComponent: React.FC<ProjectThumnailComponentProps> = (
  props
) => {
  const { onClick, imagePath, name } = props

  const handleClick = React.useCallback(() => {
    if (onClick) onClick(imagePath, name)
  }, [imagePath, name, onClick])

  return (
    <>
      <picture className={project.thumbnail_image} onClick={handleClick}>
        <figure>
          <Image
            src={imagePath}
            layout="fill"
            priority
            objectFit="cover"
            alt="thumnail_image"
            sizes="50vw"
          />
        </figure>
      </picture>
    </>
  )
}

export default React.memo(ProjectThumnailComponent, isEqual)
