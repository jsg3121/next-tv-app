import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Image from 'next/image'
import styled from 'styled-components'

interface ProjectDetailProps {
  detail: Array<ProjectDescription>
}

const ThumnailImage = styled((props) => {
  const { children } = props

  return <picture {...props}>{children}</picture>
})`
  figure {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: absolute;
    will-change: transform;
    transition: transform 0.2s;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    z-index: ${(props) => props.zindex};
    transform-origin: bottom;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &:hover {
      transform: scale(1.1);
      &::after {
        content: none;
      }
    }
  }
`

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { detail } = props

  return (
    <article className={project.project_description_container}>
      {detail.map((item, index) => {
        const { thumbnail_image } = item
        return (
          <ThumnailImage
            key={index}
            width={thumbnail_image.width}
            height={thumbnail_image.height}
            top={thumbnail_image.top}
            bottom={thumbnail_image.bottom}
            left={thumbnail_image.left}
            right={thumbnail_image.right}
            zindex={thumbnail_image.zIndex}
          >
            <figure>
              <Image
                src={thumbnail_image.img}
                alt="thumbnail"
                layout="fill"
                objectFit={
                  thumbnail_image.objectFit
                    ? thumbnail_image.objectFit
                    : 'cover'
                }
                loading="lazy"
              />
            </figure>
          </ThumnailImage>
        )
      })}
    </article>
  )
}

export default React.memo(ProjectDetail, isEqual)
