import { Progress, Text, Title } from 'components'
import { Picture } from 'container/src/skills'
import isEqual from 'fast-deep-equal'
import React from 'react'
import skills from 'styles/skills.module.scss'

interface SkillsProps {
  data: SkillDescription
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { data } = props

  const handleClick = React.useCallback((val: SkillInfo['name']) => {}, [])

  return (
    <article className={skills.container} id="skills">
      <div className={skills.skills_rate}>
        <Title depth={1}>Name</Title>
        <Progress />
        <Text>description</Text>
      </div>
      <div className={skills.skills_container}>
        <div>
          <Title depth={2}>Advanced</Title>
          <div className={skills.skills_list}>
            {data &&
              data.advanced.map((item, index) => {
                return (
                  <Picture
                    key={index}
                    src={item.iconUrl}
                    alt="skills_image"
                    width="95px"
                    height="95px"
                    layout="responsive"
                    selectkey={item.name}
                    onClick={handleClick}
                  />
                )
              })}
          </div>
        </div>
        <div>
          <Title depth={2}>Intermediate</Title>
          <div className={skills.skills_list}>
            {data &&
              data.intermediate.map((item, index) => {
                return (
                  <Picture
                    key={index}
                    src={item.iconUrl}
                    alt="skills_image"
                    width="95px"
                    height="95px"
                    layout="responsive"
                    selectkey={item.name}
                    onClick={handleClick}
                  />
                )
              })}
          </div>
        </div>
        <div>
          <Title depth={2}>Beginner</Title>
          <div className={skills.skills_list}>
            {data &&
              data.beginner.map((item, index) => {
                return (
                  <Picture
                    key={index}
                    src={item.iconUrl}
                    alt="skills_image"
                    width="95px"
                    height="95px"
                    layout="responsive"
                    selectkey={item.name}
                    onClick={handleClick}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default React.memo(Skills, isEqual)
