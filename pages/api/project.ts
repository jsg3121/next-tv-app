import { NextApiRequest, NextApiResponse } from 'next'

const projectData: ProjectData = {
  Quber: [
    {
      name: 'Nepa SmartMirror, Tablet 장바구니 서비스',
      date: '2020. 11 ~ 2021. 02',
      skills: ['javascript', 'html', 'css', 'spring'],
      workers: {
        total: 2,
        design: 0,
        developer: 2,
      },
      thumbnail_image: {
        img: '/nepa_0.svg',
      },
      service_image: ['/nepa_0.svg'],
      backgroundColor: '#48af97',
    },
    {
      name: '서경방송 관리자페이지 고도화 (원격 관리)',
      date: '2021. 06 ~ 2021. 10',
      skills: ['typescript', 'graphql', 'react', 'redux', 'docker', 'node'],
      workers: {
        total: 2,
        design: 0,
        developer: 2,
      },
      thumbnail_image: {
        img: '/nepa_0.svg',
      },
      service_image: ['/scs_0.png'],
      waring: '보안상의 이유로 인하여 세부 정보를 표시할 수 없습니다',
      backgroundColor: '#ffffff',
    },
    {
      name: '서경방송 관리자페이지 고도화 (OTA 서버)',
      date: '2021. 11 ~ 2022. 03',
      skills: ['typescript', 'react', 'node', 'docker'],
      workers: {
        total: 2,
        design: 0,
        developer: 2,
      },
      thumbnail_image: {
        img: '/nepa_0.svg',
      },
      service_image: ['/scs_0.png'],
      waring: '보안상의 이유로 인하여 세부 정보를 표시할 수 없습니다',
      backgroundColor: '#ffffff',
    },
  ],
  Cresector: [
    {
      name: '선주 상호보험',
      date: '2019. 07 ~ 2019. 11',
      skills: ['typescript', 'angular'],
      workers: {
        total: 3,
        design: 1,
        developer: 2,
      },
      thumbnail_image: {
        img: '/nepa_0.svg',
      },
      service_image: [
        '/kpi_0.svg',
        '/kpi_1.png',
        '/kpi_2.png',
        '/kpi_3.png',
        '/kpi_4.png',
        '/kpi_5.png',
      ],
      url: 'https://www.kpiclub.or.kr/',
      backgroundColor: '#001442',
    },
    {
      name: 'Toyota Priuse C Crossover & EventPage',
      date: '2020. 01 ~ 2020. 04',
      skills: ['javascript', 'css', 'html'],
      workers: {
        total: 3,
        design: 1,
        developer: 2,
      },
      thumbnail_image: {
        img: '/nepa_0.svg',
      },
      service_image: [
        '/toyota_0.svg',
        '/toyota_1.png',
        '/toyota_2.png',
        '/toyota_3.png',
        '/toyota_4.png',
      ],
      url: 'https://www.toyota.co.kr/models/models_PRIUSC_CROSSOVER.aspx',
      backgroundColor: '#ffffff',
    },
    {
      name: '기산전자 관리자 페이지',
      date: '2020. 05 ~ 2020. 07',
      skills: ['javascript', 'css', 'html'],
      workers: {
        total: 2,
        design: 1,
        developer: 1,
      },
      thumbnail_image: {
        img: '/nepa_0.svg',
      },
      service_image: ['/kisan_0.png'],
      waring: '보안상의 이유로 인하여 세부 정보를 표시할 수 없습니다',
      backgroundColor: '#1a1834',
    },
  ],
  ToyProject: [
    {
      name: 'Culture in Seoul',
      date: '2021. 11 ~ 2022. 03',
      skills: ['vue', 'javascript', 'scss'],
      workers: {
        total: 2,
        design: 1,
        developer: 1,
      },
      thumbnail_image: {
        img: '/culture_4.png',
        top: '10rem',
        left: '10rem',
        width: '15rem',
        height: '23rem',
        zIndex: 10,
        objectFit: 'cover',
      },
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
      name: 'Best Weather',
      date: '2021. 11 ~ 2022. 03',
      skills: ['vue', 'typescript', 'node', 'prisma', 'mysql', 'docker'],
      workers: {
        total: 2,
        design: 1,
        developer: 1,
      },
      thumbnail_image: {
        img: '/weather_1.png',
        top: '13rem',
        right: '10rem',
        width: '18rem',
        height: '27rem',
        zIndex: 20,
        objectFit: 'cover',
      },
      service_image: ['/weather_0.png', '/weather_1.png', '/weather_2.png'],
      url: 'https://best-weather.com/',
      waring: '공공 API사용으로 이하여 정보 요청시간이 오래 걸릴 수 있습니다.',
      git: 'https://github.com/jsg3121/WeatherVue',
      backgroundColor: '#d7e1f7',
    },
    {
      name: 'Devfolio v1',
      date: '2021. 11 ~ 2022. 03',
      skills: ['vue', 'javascript', 'scss'],
      workers: {
        total: 2,
        design: 1,
        developer: 1,
      },
      thumbnail_image: {
        img: '/devfolio_1.png',
        top: '7rem',
        right: '30rem',
        width: '23rem',
        height: '13rem',
        zIndex: 15,
        objectFit: 'cover',
      },
      service_image: [
        '/devfolio_0.png',
        '/devfolio_1.png',
        '/devfolio_2.png',
        '/devfolio_3.png',
        '/devfolio_4.png',
      ],
      url: 'http://sungyujang.com/#/',
      backgroundColor: '#181920',
    },
    {
      name: 'Devfolio v2',
      date: '2021. 11 ~ 2022. 03',
      skills: ['Next.js', 'typescript', 'scss', 'storybook'],
      workers: {
        total: 1,
        design: 0,
        developer: 1,
      },
      thumbnail_image: {
        img: '/devfolio_0.png',
        bottom: '10rem',
        left: '27rem',
        width: '30rem',
        height: '17rem',
        zIndex: 25,
        objectFit: 'cover',
      },
      service_image: ['/devfolio_0.png'],
      backgroundColor: '#181920',
    },
  ],
}

const handler = (req: NextApiRequest, res: NextApiResponse<ProjectData>) => {
  return res.status(200).send(projectData)
}

export default handler
