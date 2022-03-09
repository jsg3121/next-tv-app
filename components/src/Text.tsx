import React from 'react'
import isEqual from 'fast-deep-equal'
import text from 'styles/text.module.scss'

interface TextProps {
  children: React.ReactNode
}

const Text: React.FC<TextProps> = (props) => {
  const { children } = props

  return <p className={text.text}>{children}</p>
}

export default React.memo(Text, isEqual)
