import React from 'react'
import isEqual from 'fast-deep-equal'

interface ThemeComponentProps {}

const ThemeComponent: React.FC<ThemeComponentProps> = (props) => {
  const {} = props

  return <></>
}

export default React.memo(ThemeComponent, isEqual)
