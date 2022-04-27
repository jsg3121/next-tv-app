import { Title } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import { ProjectCard, ProjectDetail } from '../../../src/project'
import { gsap } from 'gsap'
interface ProjectProps {
  data: ProjectData
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const [selectData, setSelectData] = React.useState<ProjectDescription>()
  const quberRef = React.useRef<HTMLDivElement>(null)
  const cresectorRef = React.useRef<HTMLDivElement>(null)
  const toyRef = React.useRef<HTMLDivElement>(null)

  const handleClick = React.useCallback((data: ProjectDescription) => {
    setIsShow(true)
    setSelectData(data)
  }, [])

  React.useEffect(() => {
    gsap.timeline().to(quberRef.current, {
      transform: 'translate(0,0)',
      duration: 1,
      delay: 1,
      ease: 'power3.out',
    })
    gsap.timeline().to(cresectorRef.current, {
      transform: 'translate(0,0)',
      duration: 1,
      delay: 1.2,
      ease: 'power3.out',
    })
    gsap.timeline().to(toyRef.current, {
      transform: 'translate(0,0)',
      duration: 1,
      delay: 1.4,
      ease: 'power3.out',
    })
  }, [])

  return (
    <article id="project" className={project.container}>
      <div>
        <section className={project.container_section} ref={quberRef}>
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
                      delay={1}
                    />
                  </article>
                )
              })}
          </div>
        </section>
        <section className={project.container_section} ref={cresectorRef}>
          <Title depth={1}>Cresector</Title>
          <hr />
          <div className={project.contaianer_thumbnail}>
            {data &&
              data.Cresector.map((item, index: number) => {
                return (
                  <article className={project.thumbnail} key={index}>
                    <ProjectCard
                      thumbnail={item.service_image[0]}
                      backgroundColor={item.backgroundColor}
                      selectData={item}
                      onClick={handleClick}
                      delay={1.2}
                    />
                  </article>
                )
              })}
          </div>
        </section>
        <section className={project.container_section} ref={toyRef}>
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
                      delay={1.4}
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
