import React from 'react'
import isEqual from 'fast-deep-equal'
import project from 'styles/project.module.scss'
import Image from 'next/image'
import styled from 'styled-components'

interface ProjectCardProps {
  children?: React.ReactNode
  thumbnail: string
  backgroundColor: string
}

const ProjectThumbnail = styled((props) => {
  const { children } = props
  return <div {...props}>{children}</div>
})`
  width: 25%;
  height: 33.33vh;
  display: block;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
`

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { backgroundColor, thumbnail } = props
  return (
    <ProjectThumbnail backgroundColor={backgroundColor}>
      <picture>
        <figure>
          <Image
            src={thumbnail}
            alt="Project_image"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </figure>
      </picture>
    </ProjectThumbnail>
  )
}

export default React.memo(ProjectCard, isEqual)
