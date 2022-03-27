import { Title } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import { ProjectCard, ProjectDetail } from '../../../src/project'

interface ProjectProps {
  data: ProjectData
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const [selectData, setSelectData] = React.useState<ProjectDescription>()

  const handleClick = React.useCallback((data: ProjectDescription) => {
    setIsShow(true)
    setSelectData(data)
  }, [])

  return (
    <article id="project" className={project.container}>
      <div>
        <section className={project.container_section}>
          <Title depth={1}>Quber</Title>
          <hr />
          <div className={project.contaianer_thumbnail}>
            {data &&
              data.Quber.map((item, index: number) => {
                return (
                  <article className={project.thumbnail} key={index}>
                    <ProjectCard
                      thumbnail={item.service_image[0]}
                      backgroundColor={item.backgroundColor}
                      onClick={handleClick}
                      selectData={item}
                    />
                  </article>
                )
              })}
          </div>
        </section>
        <section className={project.container_section}>
          <Title depth={1}>Cresector</Title>
          <hr />
          <div className={project.contaianer_thumbnail}>
            {data &&
              data.Creasector.map((item, index: number) => {
                return (
                  <article className={project.thumbnail} key={index}>
                    <ProjectCard
                      thumbnail={item.service_image[0]}
                      backgroundColor={item.backgroundColor}
                      selectData={item}
                      onClick={handleClick}
                    />
                  </article>
                )
              })}
          </div>
        </section>
        <section className={project.container_section}>
          <Title depth={1}>ToyProject</Title>
          <hr />
          <div className={project.contaianer_thumbnail}>
            {data &&
              data.ToyProject.map((item, index: number) => {
                return (
                  <article className={project.thumbnail} key={index}>
                    <ProjectCard
                      thumbnail={item.service_image[0]}
                      backgroundColor={item.backgroundColor}
                      selectData={item}
                      onClick={handleClick}
                    />
                  </article>
                )
              })}
          </div>
        </section>
      </div>
      {isShow && selectData && <ProjectDetail detail={selectData} />}
    </article>
  )
}

export default React.memo(Project, isEqual)
