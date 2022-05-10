import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'
import { ProjectCard, ProjectDetail } from '../../../src/project'
interface ProjectProps {
  data: ProjectData
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props
  const projectRef = React.useRef<HTMLDivElement>(null)
  const [detail, setDetail] = React.useState<ProjectData[keyof ProjectData]>()
  const [category, setCategory] =
    React.useState<keyof ProjectData>('ToyProject')

  const handleClick = React.useCallback(
    (val: keyof ProjectData) => {
      if (projectRef.current) {
        projectRef.current.classList.add(`${project.active}`)
        setDetail(data[val])
        setCategory(val)
      }
    },
    [projectRef, data]
  )

  React.useEffect(() => {
    if (data) {
      setDetail(data.ToyProject)

      const time = setTimeout(() => {
        projectRef.current?.classList.add(`${project.active}`)
      }, 1000)
      return () => {
        return clearTimeout(time)
      }
    }
  }, [data])

  return (
    <article id="project" className={project.container}>
      <div className={project.slide_container}>
        <div className={project.contaianer_thumbnail} ref={projectRef}>
          <article className={project.thumbnail}>
            <ProjectCard
              onClick={handleClick}
              thumbnail={'/quber.png'}
              backgroundColor={'#888888'}
              category="Quber"
            />
          </article>
          <article className={project.thumbnail}>
            <ProjectCard
              onClick={handleClick}
              thumbnail={'/cresector.jpeg'}
              backgroundColor={'red'}
              category="Cresector"
            />
          </article>
          <article className={project.thumbnail}>
            <ProjectCard
              onClick={handleClick}
              thumbnail={'/personal.png'}
              backgroundColor={'#ffffff'}
              category="ToyProject"
            />
          </article>
        </div>
      </div>
      {detail && <ProjectDetail detail={detail} category={category} />}
    </article>
  )
}

export default React.memo(Project, isEqual)
