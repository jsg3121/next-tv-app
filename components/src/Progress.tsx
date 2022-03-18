import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import Text from './Text'
import { $Color } from 'styles'
import { Title } from './Title'

interface ProgressProps {}

const PrgressBar = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;
`

const Percentage = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${$Color.default.bright4};
  & > span {
    width: 30%;
    height: 100%;
    border-radius: 4px;
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
