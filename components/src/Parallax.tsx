import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface ParallaxProps {
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
  translateX?: string
  translateY?: string
  backgroundImage?: string
  width?: number | string
  height?: number | string
  zIndex?: number | string
  blur?: number | string
}

const Item = styled.div`
  position: absolute;
  will-change: transform;
`

const Parallax: React.FC<ParallaxProps> = (props) => {
  const {
    backgroundImage,
    left,
    right,
    top,
    bottom,
    zIndex,
    width,
    height,
    translateX = '',
    translateY = '',
    blur,
  } = props
  const componentsRef = React.useRef<HTMLHeadingElement>(null)
  const [rect, setRect] = React.useState<DOMRect>()

  React.useEffect(() => {
    if (componentsRef.current) {
      setRect(componentsRef.current.getBoundingClientRect())
    }
  }, [])

  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (rect) {
        const mouseX_title = e.clientX - rect.left
        const mouseY_title = e.clientY - rect.top

        gsap.to(componentsRef.current, {
          translateX:
            ((mouseX_title - rect.width / 2) / rect.width) *
            parseInt(translateX, 10),
          translateY:
            ((mouseY_title - rect.height / 2) / rect.height) *
            parseInt(translateY, 10),
        })
      }
    })
  }, [rect, translateX, translateY])

  return (
    <Item
      {...props}
      ref={componentsRef}
      style={{
        top: top ? `${top}` : 'none',
        bottom: bottom ? `${bottom}` : 'none',
        left: left ? `${left}` : 'none',
        right: right ? `${right}` : 'none',
        zIndex: zIndex,
        width,
        height,
      }}
    >
      {backgroundImage && (
        <picture>
          <figure
            style={{
              filter: `blur(${blur}px)`,
            }}
          >
            <Image
              src={backgroundImage}
              width={width}
              height={height}
              alt="Devfolio"
              loading="lazy"
              layout="responsive"
            />
          </figure>
        </picture>
      )}
    </Item>
  )
}

export default React.memo(Parallax, isEqual)
