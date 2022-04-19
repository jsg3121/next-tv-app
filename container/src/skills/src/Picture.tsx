import isEqual from 'fast-deep-equal'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface PictureProps
  extends Pick<
    ImageProps,
    'width' | 'height' | 'alt' | 'loading' | 'layout' | 'src'
  > {
  selectkey?: SkillInfo['name']
  onClick?: (val: SkillInfo['name']) => void
}

const PictureContainer = styled((props) => {
  const { children, ...rest } = props
  return <picture {...rest}>{children}</picture>
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: block;
  margin: 0.555555555555556rem;
  position: relative;

  figure {
    position: absolute;

    &:hover {
      width: 6.111111111111111rem;
      height: 6.111111111111111rem;
      top: -0.416666666666667rem;
      left: -0.416666666666667rem;
    }
  }
`

const Picture: React.FC<PictureProps> = (props) => {
  const { width, height, alt, selectkey, onClick, ...rest } = props

  const handleClick = React.useCallback(async () => {
    if (onClick && selectkey) {
      onClick(selectkey)
    }
  }, [onClick, selectkey])

  return (
    <PictureContainer width={width} height={height} onClick={handleClick}>
      <figure>
        <Image
          {...rest}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </figure>
    </PictureContainer>
  )
}

export default React.memo(Picture, isEqual)
