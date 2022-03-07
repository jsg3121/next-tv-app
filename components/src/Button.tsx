import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { $Color } from 'styles'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const ButtonContainer = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${$Color.default.dark1};
  box-shadow: 0 8px 32px 0 ${$Color.default.dark1};
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid #ffffff2d;
  color: #ffffff;
  font-size: 1rem;

  &:hover {
    background-color: ${$Color.default.dark2};
  }
`

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick } = props

  const handleClick = React.useCallback(() => {
    onClick()
  }, [onClick])

  return <ButtonContainer onClick={handleClick}>{children}</ButtonContainer>
}

export default React.memo(Button, isEqual)
