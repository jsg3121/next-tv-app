import http from 'axios'
import { ChannelContainer, Project as ProjectContainer } from 'container'
import isEqual from 'fast-deep-equal'
import { NextPage } from 'next'
import React from 'react'
import { Actions, useDispatch } from 'store'
import page from 'styles/page.module.scss'
import useSWR from 'swr'

const chSet = {
  chName: 'Project',
  chNum: 3,
}

const Project: NextPage = () => {
  const dispatch = useDispatch()

  const { data: projectData } = useSWR('/intorduce/project', async () => {
    return await http
      .request({
        method: 'GET',
        url: '/api/project',
      })
      .then((res) => res.data)
  })

  React.useEffect(() => {
    dispatch(Actions.remote.channelSet(chSet))
  }, [dispatch])

  return (
    <>
      <ChannelContainer />
      <section className={page.section_project}>
        <ProjectContainer data={projectData} />
      </section>
    </>
  )
}

export default React.memo(Project, isEqual)
