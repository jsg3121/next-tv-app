import http from 'axios'
import { Channel, Remote } from 'components'
import { Project as ProjectContainer } from 'container'
import isEqual from 'fast-deep-equal'
import React from 'react'
import page from 'styles/page.module.scss'
import useSWR from 'swr'

interface ProjectProps {}

const Project: React.FC<ProjectProps> = (props) => {
  const {} = props
  const { data: projectData } = useSWR('/intorduce/project', async () => {
    return await http
      .request({
        method: 'GET',
        url: '/api/project',
      })
      .then((res) => res.data)
  })

  React.useEffect(() => {
    sessionStorage.setItem('chNum', '3')
  }, [])

  return (
    <>
      <Channel
        chName="Project"
        chNumber="003"
        progress={60}
        broadcast="Portfolio"
      />
      <section className={page.section_project}>
        <ProjectContainer data={projectData} />
      </section>
    </>
  )
}

export default React.memo(Project, isEqual)
