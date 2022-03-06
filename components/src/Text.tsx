import React from 'react'
import isEqual from 'fast-deep-equal'

interface TextProps {}

const Text: React.FC<TextProps> = (props) => {
  const {} = props

  return <></>
}

export default React.memo(Text, isEqual)
