declare global {
  export type SkillsName = 'css' | 'html' | 'javascript' | 'docker' | 'graphql'

  export type SkillDescription = {
    [T in SkillsName]: {
      grade: number
      description: string
    }
  }
}

export {}
