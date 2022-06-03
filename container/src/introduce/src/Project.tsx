import { ProjectSlide } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import project from 'styles/project.module.scss'

interface ProjectProps {
  data: ProjectData
}

interface DetailData {
  images: Array<string>
  title: string
  date: string
  skills: Array<SkillsName>
  git: string
  url?: string
}

const Project: React.FC<ProjectProps> = (props) => {
  const { data } = props

  return (
    <article id="project" className={project.container}>
      <ProjectSlide data={data} />
    </article>
  )
}

export default React.memo(Project, isEqual)
