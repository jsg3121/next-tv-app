import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  a: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.query.key === 'css') {
    return res.status(200).json({ a: 'a' })
  }
  return res.status(200).json({ a: 'bbbb' })
}

export default handler
