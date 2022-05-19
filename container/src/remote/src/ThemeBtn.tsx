import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import React from 'react'
import remote from 'styles/remote.module.scss'

interface ThemeBtnProps {}

const ThemeBtn: React.FC<ThemeBtnProps> = (props) => {
  const {} = props

  return (
    <div className={remote.switch_theme}>
      <input type="checkbox" name="theme" id="theme" />
      <label htmlFor="theme">
        theme change toggle
        <i></i>
      </label>
      <div className={remote.theme_icon}>
        <i>
          <Image
            src="/theme_light.svg"
            layout="fill"
            alt="icon_theme"
            priority
          />
        </i>
        <i>
          <Image
            src="/theme_dark.svg"
            layout="fill"
            alt="icon_theme"
            priority
          />
        </i>
      </div>
    </div>
  )
}

export default React.memo(ThemeBtn, isEqual)
