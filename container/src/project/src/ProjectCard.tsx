import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import styled from 'styled-components'
import { gsap } from 'gsap'
interface ProjectCardProps {
  children?: React.ReactNode
  thumbnail: string
  backgroundColor: string
  onClick?: (key: ProjectDescription) => void
  selectData: ProjectDescription
  delay: number
}

const ProjectThumbnail = styled((props) => {
  const { children, delay } = props
  const thumbnailRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    gsap.timeline().to(thumbnailRef.current, {
      rotate: 0,
      duration: 1,
      ease: 'elastic.out(1.5, 0.75)',
      delay: delay * 1.45,
    })
  }, [delay, thumbnailRef])

  return (
    <div {...props} ref={thumbnailRef}>
      {children}
    </div>
  )
})`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background-color: ${(props) => props.backgroundcolor};
  z-index: 115;
  border-radius: 1.666666666666667rem;
  overflow: hidden;
  transform-origin: top;
  transform: rotate(30deg);

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
  const { backgroundColor, thumbnail, onClick, selectData, delay } = props

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(selectData)
    }
  }, [selectData, onClick])

  return (
    <ProjectThumbnail
      backgroundcolor={backgroundColor}
      onClick={handleClick}
      delay={delay}
    >
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
