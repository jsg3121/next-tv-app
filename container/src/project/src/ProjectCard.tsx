import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface ProjectCardProps {
  children?: React.ReactNode
  category: keyof ProjectData
  thumbnail: string
  backgroundColor?: string
  onClick?: (key: keyof ProjectData) => void
}

const ProjectThumbnail = styled((props) => {
  const { children } = props

  return <div {...props}>{children}</div>
})`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background-color: ${(props) => props.backgroundcolor};
  z-index: 115;
  overflow: hidden;
  transform-origin: top;

  figure {
    position: relative;
  }
`

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { backgroundColor, thumbnail, onClick, category } = props

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(category)
    }
  }, [onClick, category])

  return (
    <ProjectThumbnail backgroundcolor={backgroundColor} onClick={handleClick}>
      <picture>
        <figure>
          <Image
            src={thumbnail}
            alt="Project_image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </figure>
      </picture>
    </ProjectThumbnail>
  )
}

export default React.memo(ProjectCard, isEqual)
