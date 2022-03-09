import isEqual from 'fast-deep-equal'
import React from 'react'
import button from 'styles/button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  type: 'primary' | 'danger' | 'success'
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, type } = props

  const handleClick = React.useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <button onClick={handleClick} className={button[type]}>
      {children}
    </button>
  )
}

export default React.memo(Button, isEqual)
