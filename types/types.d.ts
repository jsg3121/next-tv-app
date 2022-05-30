import { ImageProps } from 'next/image'

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

  export type ProjectOffice = 'ToyProject'

  export type ProjectDescription = {
    name: string
    date: string
    skills: Array<SkillsName>
    workers: {
      total: number
      design: number
      developer: number
    }
    role?: Array<string>
    thumbnail_image: string
    service_image: Array<string>
    backgroundColor: string
    url?: string
    waring?: string
    git?: string
  }

  export type ProjectData = Array<ProjectDescription>
}

export {}
