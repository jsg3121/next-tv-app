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
    | 'angular'
    | 'spring'
    | 'scss'
    | 'Next.js'

  export type SkillInfo = {
    name: keyof SkillName
    iconUrl: `/${T}.svg`
  }

  export type SkillDescription = {
    [K in GradeType]: Array<SkillInfo>
  }

  export type ProjectOffice = 'Quber' | 'Cresector' | 'ToyProject'

  export type ProjectDescription = {
    name: string
    date: string
    skills: Array<SkillsName>
    workers: {
      total: number
      design: number
      developer: number
    }
    service_image: Array<string>
    backgroundColor: string
    url?: string
    waring?: string
    git?: string
  }

  export type ProjectData = {
    [T in ProjectOffice]: Array<ProjectDescription>
  }
}

export {}
