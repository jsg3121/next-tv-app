import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface IconProps {
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

/**
 * info : 패럴렉스 아이콘 팝 모션
 * @param {HTMLHeadingElement} current
 * @param {number} delay
 */
const popupEffect = (current: HTMLHeadingElement, delay: number): void => {
  gsap
    .timeline()
    .to(current, {
      scale: 1.2,
      duration: 0.2,
    })
    .to(current, {
      filter:
        'drop-shadow(0.277777777777778rem 0.333333333333333rem 0.222222222222222rem rgb(0 0 0 / 0.4))',
      scale: 1,
      duration: 0.2,
    })
    .delay(delay)
}

const IconContainer = styled((props) => {
  const {
    backgroundImage,
    width,
    height,
    translateX = '',
    translateY = '',
    blur,
    delay,
    top,
    bottom,
    right,
    left,
    zIndex,
    ...rest
  } = props

  const componentsRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    if (componentsRef.current) {
      popupEffect(componentsRef.current, delay)
    }
  }, [delay])

  return (
    <div ref={componentsRef} {...rest}>
      {backgroundImage && (
        <picture>
          <figure>
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
    </div>
  )
})`
  position: fixed;
  will-change: transform;
  box-sizing: border-box;
  transform: scale(0);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => {
    return props.top ? props.top : 'none'
  }};
  bottom: ${(props) => {
    return props.bottom ? props.bottom : 'none'
  }};
  right: ${(props) => {
    return props.right ? props.right : 'none'
  }};
  left: ${(props) => {
    return props.left ? props.left : 'none'
  }};
  z-index: ${(props) => props.zIndex};

  & figure {
    position: relative;
    filter: ${(props) => {
      return props.blur ? `blur(${props.blur}px)` : ''
    }};
  }
`

const Icon: React.FC<IconProps> = (props) => {
  return <IconContainer {...props}></IconContainer>
}

export default React.memo(Icon, isEqual)
