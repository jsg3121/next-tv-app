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
  width: string
  height: string
  zIndex?: number | string
  blur?: number | string
  delay: number
}

const Item = styled.div`
  position: absolute;
  will-change: transform;
  border-radius: 50%;
  box-sizing: border-box;
`

const popupEffect = (current: HTMLHeadingElement, delay: number) => {
  gsap
    .to(current, {
      borderRadius: 0,
      border: 0,
      scale: 1.2,
    })
    .duration(0.2)
    .delay(delay)
  gsap
    .to(current, {
      scale: 1,
    })
    .duration(0.2)
    .delay(delay + 0.2)
}

const mouseMotion = (
  e: MouseEvent,
  current: HTMLHeadingElement,
  rect: DOMRect,
  translateX: string,
  translateY: string
) => {
  const mouseX_title = e.clientX - rect.left
  const mouseY_title = e.clientY - rect.top

  gsap.to(current, {
    translateX:
      ((mouseX_title - rect.width / 2) / rect.width) * parseInt(translateX, 10),
    translateY:
      ((mouseY_title - rect.height / 2) / rect.height) *
      parseInt(translateY, 10),
  })
}

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
    delay,
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
      if (rect && componentsRef.current) {
        mouseMotion(e, componentsRef.current, rect, translateX, translateY)
      }
    })
  }, [rect, translateX, translateY])

  React.useEffect(() => {
    if (componentsRef.current) {
      popupEffect(componentsRef.current, delay)
    }
  }, [delay])

  return (
    <Item
      ref={componentsRef}
      style={{
        top: top ? `${top}` : 'none',
        bottom: bottom ? `${bottom}` : 'none',
        left: left ? `${left}` : 'none',
        right: right ? `${right}` : 'none',
        zIndex: zIndex,
        border: `${parseInt(width?.replace('px', ''), 10) / 2}px solid #353452`,
        width,
        height,
      }}
    >
      {backgroundImage && (
        <picture>
          <figure
            style={
              blur
                ? {
                    filter: `blur(${blur}px)`,
                  }
                : {}
            }
          >
            <Image
              src={backgroundImage}
              width={width}
              height={height}
              alt="Devfolio"
              layout="responsive"
              priority
            />
          </figure>
        </picture>
      )}
    </Item>
  )
}

export default React.memo(Parallax, isEqual)
