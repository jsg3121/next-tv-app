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

  const handleClick = React.useCallback(() => {}, [])

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
                      onClick={handleClick}
                    />
                  </article>
                )
              })}
          </div>
        </section>
      </div>

      {/* <div>
        {data &&
          data.map((item, index: number) => {
            return (
              <ProjectCard
                thumbnail={item.service_image[0]}
                backgroundColor={item.backgroundColor}
                onClick={handleClick}
                key={index}
              />
            )
          })}
      </div> */}

      {/* {isShow && data && <ProjectDetail detail={data[0]} />} */}
    </article>
  )
}

export default React.memo(Project, isEqual)
