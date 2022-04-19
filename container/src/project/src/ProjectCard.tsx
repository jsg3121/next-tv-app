import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Image from 'next/image'
import styled from 'styled-components'

interface ProjectCardProps {
  children?: React.ReactNode
  thumbnail: string
  backgroundColor: string
  onClick?: (key: ProjectDescription) => void
  selectData: ProjectDescription
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
  z-index: 100;
  border-radius: 1.666666666666667rem;
  overflow: hidden;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    &::after {
      content: none;
    }
  }
`

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { backgroundColor, thumbnail, onClick, selectData } = props

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(selectData)
    }
  }, [selectData, onClick])

  return (
    <ProjectThumbnail backgroundcolor={backgroundColor} onClick={handleClick}>
      <picture>
        <figure>
          <Image
            src={thumbnail}
            alt="Project_image"
            layout="responsive"
            width="100"
            height="100"
            objectFit="contain"
            priority
          />
        </figure>
      </picture>
    </ProjectThumbnail>
  )
}

export default React.memo(ProjectCard, isEqual)
