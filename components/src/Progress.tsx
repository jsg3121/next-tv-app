import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import Text from './Text'
import { $Color } from 'styles'
import { Title } from './Title'

interface ProgressProps {}

const PrgressBar = styled.div`
  width: 100%;
  height: 3.333333333333333rem;
  margin: 1.111111111111111rem 0;
`

const Percentage = styled.div`
  width: 100%;
  height: 0.444444444444444rem;
  background-color: ${$Color.default.bright4};
  & > span {
    width: 30%;
    height: 100%;
    border-radius: 0.222222222222222rem;
    background-color: ${$Color.default.dark1};
    display: block;
  }

  & > p {
    float: right;
  }
`

const SkillPercentage: React.FC = () => {
  return (
    <Percentage>
      <span></span>
      <Text>100%</Text>
    </Percentage>
  )
}

const Progress: React.FC<ProgressProps> = (props) => {
  const {} = props

  return (
    <PrgressBar>
      <Title depth={2}>grade</Title>
      <SkillPercentage />
    </PrgressBar>
  )
}

export default React.memo(Progress, isEqual)
