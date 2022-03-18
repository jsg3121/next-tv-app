import type { NextApiRequest, NextApiResponse } from 'next'

const skillsDescription: SkillDescription = {
  advanced: [
    {
      iconUrl: '/css.svg',
      name: 'css',
    },
    {
      name: 'html',
      iconUrl: '/html.svg',
    },
    {
      name: 'javascript',
      iconUrl: '/javascript.svg',
    },
  ],
  intermediate: [
    {
      name: 'node',
      iconUrl: '/node.svg',
    },
    {
      name: 'react',
      iconUrl: '/react.svg',
    },
    {
      name: 'redux',
      iconUrl: '/redux.svg',
    },
    {
      name: 'typescript',
      iconUrl: '/typescript.svg',
    },
    {
      name: 'vue',
      iconUrl: '/vue.svg',
    },
  ],
  beginner: [
    {
      name: 'docker',
      iconUrl: '/docker.svg',
    },
    {
      name: 'graphql',
      iconUrl: '/graphql.svg',
    },
    {
      name: 'mobx',
      iconUrl: '/mobx.svg',
    },
    {
      name: 'mysql',
      iconUrl: '/mysql.svg',
    },
    {
      name: 'prisma',
      iconUrl: '/prisma.svg',
    },
    {
      name: 'storybook',
      iconUrl: '/storybook.svg',
    },
  ],
}

type Data = {
  result: SkillDescription
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json({ result: skillsDescription })
}

export default handler
