import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface ProjectDetailProps {
  detail: Array<ProjectDescription>
  category: keyof ProjectData
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
    background-color: ${(props) => props.backgroundcolor};

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &:hover {
      transform: scale(1.1);
      z-index: 50;

      &::after {
        content: none;
      }
    }
  }
`

const Description = styled((props) => {
  const { children } = props
  return <div {...props}>{children}</div>
})`
  position: absolute;
  right: ${(props) => {
    const { position } = props
    return position.right ? position.right : 'none'
  }};
  left: ${(props) => {
    const { position } = props
    return position.left ? position.left : 'none'
  }};
  top: ${(props) => {
    const { position } = props
    return position.top
  }};
  width: 30rem;
  height: calc(100% - 6rem);
  background-color: rgba(0, 0, 0, 0.5);
`

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { detail, category } = props
  return (
    <article className={project.project_thumb}>
      {detail.map((item, index) => {
        const { thumbnail_image } = item
        if (thumbnail_image.img) {
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
              backgroundcolor={item.backgroundColor}
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
        }
        return
      })}
      {category === 'ToyProject' && (
        <Description
          position={{
            top: '3rem',
            left: '3rem',
          }}
        ></Description>
      )}
      {category !== 'ToyProject' && (
        <Description
          position={{
            top: '3rem',
            right: '3rem',
          }}
        ></Description>
      )}
    </article>
  )
}

export default React.memo(ProjectDetail, isEqual)
