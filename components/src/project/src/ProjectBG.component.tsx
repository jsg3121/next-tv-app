import isEqual from 'fast-deep-equal'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import project from 'styles/project.module.scss'
import { ProjectDetail, ProjectNav, ProjectThumbnail } from '..'

interface ProjectSlideComponentProps {
  data: ProjectData
}

const ProjectSlideComponent: React.FC<ProjectSlideComponentProps> = (props) => {
  const { data } = props

  const settings: Settings = React.useMemo(() => {
    return {
      dots: true,
      speed: 500,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      arrows: false,
      appendDots: (dots) => (
        <div>
          <ul className={project.nav_container}> {dots} </ul>
        </div>
      ),
      customPaging: (index) => {
        const navThumb: Array<string> = []

        data.forEach((item: ProjectDescription) => {
          navThumb.push(item.thumbnail_image)
        })

        return <ProjectNav index={index} navList={navThumb} />
      },
    }
  }, [data])

  return (
    <div className={project.thumbnail_container}>
      <Slider {...settings}>
        {data &&
          data.map((list) => {
            const detail = {
              images: list.service_image,
              title: list.name,
              date: list.date,
              skills: list.skills,
              git: list.git ?? '',
              url: list.url,
            }
            return (
              <div key={list.name}>
                <ProjectThumbnail
                  imagePath={list.thumbnail_image}
                  name={list.name}
                />
                <ProjectDetail detailData={detail} />
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default React.memo(ProjectSlideComponent, isEqual)
