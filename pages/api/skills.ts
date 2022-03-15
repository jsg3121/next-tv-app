import type { NextApiRequest, NextApiResponse } from 'next'

const skillsDescription: SkillDescription = {
  css: {
    grade: 1,
    description: 'sss',
  },
  html: {
    grade: 2,
    description: 'asdfasdf',
  },
  javascript: {
    grade: 1,
    description: 'javascriptttttttttt',
  },
  docker: {
    grade: 3,
    description: 'Asdvvv',
  },
  graphql: {
    grade: 2,
    description: 'Asvasdvasdvasdvae1',
  },
}

type Data = {
  result: SkillDescription
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ result: skillsDescription })
}

export default handler
