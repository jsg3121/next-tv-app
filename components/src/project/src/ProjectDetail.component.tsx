import React from 'react'
import isEqual from 'fast-deep-equal'
import { Title } from 'components'
import project from 'styles/project.module.scss'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'

interface ProjectDetailComponentProps {
  detailData: {
    images: Array<string>
  }
}

const slideSetting: Settings = {
  lazyLoad: 'ondemand',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  draggable: false,
  adaptiveHeight: false,
  fade: true,
  pauseOnHover: false,
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
      <Title depth={1}>asd</Title>
    </>
  )
}

export default React.memo(ProjectDetailComponent, isEqual)
