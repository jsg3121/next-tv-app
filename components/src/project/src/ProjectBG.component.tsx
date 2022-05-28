import isEqual from 'fast-deep-equal'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import project from 'styles/project.module.scss'
import { ProjectNav, ProjectThumbnail } from '..'

interface ProjectBGComponentProps {
  data: ProjectData
  onClick: (val: number) => void
}

const ProjectBGComponent: React.FC<ProjectBGComponentProps> = (props) => {
  const { data, onClick } = props

  const handleChange = React.useCallback(
    (val: number) => {
      onClick(val)
    },
    [onClick]
  )

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
      afterChange: (index) => {
        handleChange(index)
      },
    }
  }, [data, handleChange])

  return (
    <div className={project.thumbnail_container}>
      <Slider {...settings}>
        {data &&
          data.map((list) => {
            return (
              <ProjectThumbnail
                key={list.name}
                imagePath={list.thumbnail_image}
                name={list.name}
              />
            )
          })}
      </Slider>
    </div>
  )
}

export default React.memo(ProjectBGComponent, isEqual)
