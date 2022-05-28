import React from 'react'
import isEqual from 'fast-deep-equal'
import { Text, Title } from 'components'
import project from 'styles/project.module.scss'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'

interface ProjectDetailComponentProps {
  detailData: {
    images: Array<string>
    title: string
    date: string
    skills: Array<SkillsName>
    git: string
    url?: string
  }
}

const slideSetting: Settings = {
  lazyLoad: 'progressive',
  infinite: true,
  autoplay: true,
  arrows: false,
  draggable: false,
  adaptiveHeight: false,
  fade: true,
  pauseOnHover: false,
  slidesToShow: 1,
}

const ProjectDetailComponent: React.FC<ProjectDetailComponentProps> = (
  props
) => {
  const { detailData } = props

  return (
    <>
      <div className={project.slide_container}>
        <Slider {...slideSetting}>
          {detailData.images.map((image, index: number) => {
            return (
              <picture className={project.slide_image} key={index}>
                <figure>
                  <Image
                    src={image}
                    loading="lazy"
                    alt="slide_image"
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
              </picture>
            )
          })}
        </Slider>
      </div>
      <div className={project.slide_description}>
        <Title depth={1}>{detailData.title}</Title>
        <ul>
          <li>
            <Title depth={2}>Project Info</Title>
            <Text>{detailData.title}</Text>
          </li>
          <li>
            <Title depth={2}>Date</Title>
            <Text>{detailData.date}</Text>
          </li>
          <li className={project.skills_list}>
            <Title depth={2}>Skills</Title>
            {detailData.skills.map((skill) => {
              return <Text key={skill}>{skill}</Text>
            })}
          </li>
          {detailData.git && (
            <li>
              <Title depth={2}>Git</Title>
              <Text>{detailData.git}</Text>
            </li>
          )}
          {detailData.url && (
            <li>
              <Title depth={2}>Link</Title>
              <Text>{detailData.url}</Text>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default React.memo(ProjectDetailComponent, isEqual)
