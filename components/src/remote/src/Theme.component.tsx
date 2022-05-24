import isEqual from 'fast-deep-equal'
import React from 'react'

interface ThemeComponentProps {}

const ThemeComponent: React.FC<ThemeComponentProps> = (props) => {
  const {} = props

  return <></>
}

export default React.memo(ThemeComponent, isEqual)
