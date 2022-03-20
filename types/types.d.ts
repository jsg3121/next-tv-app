declare global {
  export type GradeType = 'advanced' | 'intermediate' | 'beginner'

  export type SkillsName =
    | 'css'
    | 'html'
    | 'javascript'
    | 'docker'
    | 'graphql'
    | 'mobx'
    | 'mysql'
    | 'node'
    | 'prisma'
    | 'react'
    | 'redux'
    | 'storybook'
    | 'typescript'
    | 'vue'

  export type SkillInfo = {
    name: keyof SkillName
    iconUrl: `/${T}.svg`
  }

  export type SkillDescription = {
    [K in GradeType]: Array<SkillInfo>
  }
}

export {}
