import http from 'axios'
import { Picture } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import skills from 'styles/skills.module.scss'
import useSWR from 'swr'

const Skills: React.FC = () => {
  const [key, setKey] = React.useState('css')
  const { data, mutate } = useSWR(`detail/${key}`, async () => {
    return await http
      .request({
        url: `/api/detail/${key}`,
        method: 'GET',
      })
      .then((res) => res.data)
  })

  const handleClick = React.useCallback(
    (val: string) => {
      if (key !== val) {
        setKey(val)
        mutate(`detail/${key}`)
      }
    },
    [key, mutate]
  )

  return (
    <article className={skills.container} id="skills">
      <p>{JSON.stringify(data)}</p>
      <div className={skills.skills_container}>
        <div>
          <Picture
            src="/css.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="css"
            onClick={handleClick}
          />
          <Picture
            src="/css.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="css2"
            onClick={handleClick}
          />
          <Picture
            src="/css.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="css3"
            onClick={handleClick}
          />
          <Picture
            src="/css.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
        </div>
        <div>
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="html"
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
        </div>
        <div>
          <Picture
            src="/javascript.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="javascript"
          />
          <Picture
            src="/javascript.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/javascript.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
          <Picture
            src="/javascript.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
          />
        </div>
      </div>
    </article>
  )
}

export default React.memo(Skills, isEqual)
