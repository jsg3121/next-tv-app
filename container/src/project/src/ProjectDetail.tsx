import { Title } from 'components'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import project from 'styles/project.module.scss'

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
    box-shadow: 4px 3px 12px 0px rgba(0, 0, 0, 0.5);

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &:hover {
      box-shadow: 4px 3px 12px 0px ${(props) => props.backgroundcolor};
      transform: scale(1.1);
      z-index: 50;

      &::after {
        content: none;
      }
    }
  }
`

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { detail, category } = props
  return (
    <article className={project.project_thumb}>
      <div className={project.thumnail}>
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
                    priority
                  />
                </figure>
              </ThumnailImage>
            )
          }
          return
        })}
      </div>
      <div className={project.description}>
        <Title depth={1}>{category}</Title>
        <div>
          {detail.map((item, index: number) => {
            return (
              <div key={index}>
                <ul className={project.description_info}>
                  <li>
                    <Title depth={2}>프로젝트 명 :&nbsp;</Title>
                    <p>{item.name}</p>
                  </li>
                  <li className={project.info_skillList}>
                    <Title depth={2}>주요 기술 :&nbsp;</Title>
                    {item.skills.map((skills, index: number) => {
                      return <p key={index}>{skills}</p>
                    })}
                  </li>
                  <li>
                    <Title depth={2}>기간 :&nbsp;</Title>
                    <p>{item.date}</p>
                  </li>
                  {item.url && (
                    <li>
                      <Title depth={2}>url :&nbsp;</Title>
                      <Link href={item.url}>
                        <a target="_blank" rel="noopener">
                          홈페이지 방문하기
                        </a>
                      </Link>
                    </li>
                  )}
                  {item.git && (
                    <li>
                      <Title depth={2}>Github :&nbsp;</Title>
                      <Link href={item.git}>
                        <a target="_blank" rel="noopener">
                          Git 방문하기
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default React.memo(ProjectDetail, isEqual)
