import { NextApiRequest, NextApiResponse } from 'next'

const projectData: ProjectData = [
  {
    name: 'Culture in Seoul',
    date: '2020. 08 ~ 2020. 10',
    skills: ['vue', 'javascript', 'scss'],
    workers: {
      total: 2,
      design: 1,
      developer: 1,
    },
    thumbnail_image: '/culture_4.png',
    service_image: [
      '/culture_0.png',
      '/culture_1.png',
      '/culture_2.png',
      '/culture_3.png',
      '/culture_4.png',
    ],
    git: 'https://github.com/jsg3121/CultureProject.git',
    backgroundColor: '#6f6f6f',
  },
  {
    name: 'Devfolio v1',
    date: '2020. 08 ~ 2020. 10',
    skills: ['vue', 'javascript', 'scss'],
    workers: {
      total: 2,
      design: 1,
      developer: 1,
    },
    thumbnail_image: '/devfolio_1.png',
    service_image: [
      '/devfolio_0.png',
      '/devfolio_1.png',
      '/devfolio_2.png',
      '/devfolio_3.png',
      '/devfolio_4.png',
    ],
    url: 'http://sungyujang.com/#/',
    git: 'https://github.com/jsg3121/about-me',
    backgroundColor: '#181920',
  },
  {
    name: 'Best Weather',
    date: '2021. 07 ~ 2021. 12',
    skills: ['vue', 'typescript', 'node', 'prisma', 'mysql', 'docker'],
    workers: {
      total: 2,
      design: 1,
      developer: 1,
    },
    thumbnail_image: '/weather_1.png',
    service_image: ['/weather_0.png', '/weather_1.png', '/weather_2.png'],
    url: 'https://best-weather.com/',
    waring: '공공 API사용으로 이하여 정보 요청시간이 오래 걸릴 수 있습니다.',
    git: 'https://github.com/jsg3121/WeatherVue',
    backgroundColor: '#d7e1f7',
  },
  {
    name: 'Devfolio v2',
    date: '2021. 11 ~ 2022. 03',
    skills: ['Next.js', 'typescript', 'scss'],
    workers: {
      total: 1,
      design: 0,
      developer: 1,
    },
    thumbnail_image: '/devfolio_0.png',
    service_image: ['/devfolio_0.png'],
    backgroundColor: '#181920',
  },
]

const handler = (req: NextApiRequest, res: NextApiResponse<ProjectData>) => {
  return res.status(200).send(projectData)
}

export default handler
