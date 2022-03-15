import isEqual from 'fast-deep-equal'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useSWRConfig } from 'swr'

interface PictureProps
  extends Pick<
    ImageProps,
    'width' | 'height' | 'alt' | 'loading' | 'layout' | 'src'
  > {
  selectkey?: string
  onClick?: (val: string) => void
}

const PictureContainer = styled((props) => {
  const { children, ...rest } = props
  return <picture {...rest}>{children}</picture>
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: block;
  margin: 10px;
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
        <Image {...rest} alt={alt} width={width} height={height} />
      </figure>
    </PictureContainer>
  )
}

export default React.memo(Picture, isEqual)
