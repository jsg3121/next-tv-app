import { ProjectBG, ProjectDetail } from 'components'
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
  const [detail, setDetail] = React.useState<DetailData>()

  const handleClickThumb = React.useCallback(
    (val: number) => {
      const detailData = {
        images: data[val].service_image,
        title: data[val].name,
        date: data[val].date,
        skills: data[val].skills,
        git: data[val].git ?? '',
        url: data[val].url,
      }

      setDetail(detailData)
    },
    [data]
  )

  React.useEffect(() => {
    if (data) {
      const detailData = {
        images: data[0].service_image,
        title: data[0].name,
        date: data[0].date,
        skills: data[0].skills,
        git: data[0].git ?? '',
        url: data[0].url,
      }

      setDetail(detailData)
    }
  }, [data])

  return (
    <article id="project" className={project.container}>
      <ProjectBG data={data} onClick={handleClickThumb} />
      <div className={project.detail_container}>
        {detail && <ProjectDetail detailData={detail} />}
      </div>
    </article>
  )
}

export default React.memo(Project, isEqual)
