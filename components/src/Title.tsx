import React from 'react'
import isEqual from 'fast-deep-equal'
import text from 'styles/text.module.scss'

interface TitleProps {
  depth: 1 | 2 | 3
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = (props) => {
  const { depth, children } = props

  return (
    <>
      {depth === 1 && <h1 className={text.h1}>{children}</h1>}
      {depth === 2 && <h2 className={text.h2}>{children}</h2>}
      {depth === 3 && <h3 className={text.h3}>{children}</h3>}
    </>
  )
}

export default React.memo(Title, isEqual)
