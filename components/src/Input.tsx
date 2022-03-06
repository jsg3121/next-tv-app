import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { $Color } from 'styles'

interface InputProps {
  placeholder: string
  type: 'text'
}

const InputContainer = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 0;
  padding: 5px 10px;
  background-color: ${$Color.default.bright3};
  box-shadow: 0 8px 32px 0 ${$Color.default.bright2};
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid #ffffff2d;
  font-size: 1rem;
`

export const Input: React.FC<InputProps> = (props) => {
  const { placeholder, type } = props

  return <InputContainer type={type} placeholder={placeholder} />
}

export default React.memo(Input, isEqual)
