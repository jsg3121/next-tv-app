export const channelChange = (arrow: 'up' | 'down') => {
  const channelNumber = sessionStorage.getItem('chNum')
  switch (channelNumber) {
    case '1':
      if (arrow === 'up') {
        return '/ch/about'
      }
      break
    case '2':
      if (arrow === 'up') {
        return '/ch/project'
      }
      if (arrow === 'down') {
        return '/ch/intro'
      }
      break
    case '3':
      if (arrow === 'up') {
        return '/ch/contact'
      }
      if (arrow === 'down') {
        return '/ch/about'
      }
      break
    case '4':
      if (arrow === 'down') {
        return '/ch/project'
      }
    default:
      return '#'
  }
}
