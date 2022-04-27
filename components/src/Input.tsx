import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { $Color } from 'styles'

interface InputProps {
  placeholder: string
  type: 'text'
  onChange: (value: string) => void
}

const InputContainer = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 42.222rem;
  border: 0;
  padding: 0.277rem 0.556rem;
  background-color: ${$Color.default.bright3};
  box-shadow: 0 0.444rem 1.777rem 0 ${$Color.default.bright2};
  backdrop-filter: blur(0.527rem);
  -webkit-backdrop-filter: blur(0.527rem);
  border-radius: 0.555rem;
  border: 0.0555rem solid #ffffff2d;
  font-size: 1rem;
`

export const Input: React.FC<InputProps> = (props) => {
  const { placeholder, type, onChange } = props

  const handleChange = React.useCallback(
    (val) => {
      onChange(val.target.value)
    },
    [onChange]
  )

  return (
    <>
      <InputContainer
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}

export default React.memo(Input, isEqual)
