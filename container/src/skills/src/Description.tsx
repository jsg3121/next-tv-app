import React from 'react'
import isEqual from 'fast-deep-equal'
import { Title } from 'components'

interface DescriptionProps {
  data: any
}

export const Description: React.FC<DescriptionProps> = (props) => {
  const { data } = props
  return (
    <>
      <Title depth={1}>{data.grade}</Title>
      <Title depth={2}>{data.description}</Title>
    </>
  )
}

export default React.memo(Description, isEqual)
