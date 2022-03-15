import { Picture, Description } from 'container/src/skills'
import isEqual from 'fast-deep-equal'
import React from 'react'
import skills from 'styles/skills.module.scss'

interface SkillsProps {
  data: SkillDescription
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { data } = props
  const [selectSkill, setSelectSkill] = React.useState({})

  const handleClick = React.useCallback(
    (val: SkillsName) => {
      setSelectSkill(data[val])
    },
    [data]
  )

  React.useEffect(() => {
    if (data) {
      setSelectSkill(data['css'])
    }
  }, [data])

  return (
    <article className={skills.container} id="skills">
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
            src="/docker.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="docker"
            onClick={handleClick}
          />
          <Picture
            src="/graphql.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="graphql"
            onClick={handleClick}
          />
          <Picture
            src="/html.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="html"
            onClick={handleClick}
          />
        </div>
        {/* <div>
          <Picture
            src="/javascript.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="javascript"
            onClick={handleClick}
          />
          <Picture
            src="/mobx.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="mobx"
            onClick={handleClick}
          />
          <Picture
            src="/mysql.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="mysql"
            onClick={handleClick}
          />
          <Picture
            src="/node.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="node"
            onClick={handleClick}
          />
          <Picture
            src="/prisma.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="prisma"
            onClick={handleClick}
          />
          <Picture
            src="/react.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="react"
            onClick={handleClick}
          />
          <Picture
            src="/redux.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="redux"
            onClick={handleClick}
          />
        </div>
        <div>
          <Picture
            src="/storybook.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="storybook"
            onClick={handleClick}
          />
          <Picture
            src="/typescript.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="typescript"
            onClick={handleClick}
          />
          <Picture
            src="/vue.svg"
            alt="skills_image"
            width="115px"
            height="115px"
            layout="responsive"
            selectkey="vue"
            onClick={handleClick}
          />
        </div> */}
      </div>
      <Description data={selectSkill} />
    </article>
  )
}

export default React.memo(Skills, isEqual)
