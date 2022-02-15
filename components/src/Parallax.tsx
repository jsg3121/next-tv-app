import { gsap } from 'gsap';
import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface ParallaxProps {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  translateX?: string;
  translateY?: string;
  backgroundImage?: string;
  width?: number | string;
  height?: number | string;
  zIndex?: number | string;
}

export const Item = styled.div`
  position: absolute;
  will-change: transform;
`;

export const Parallax: NextPage<ParallaxProps> = (props) => {
  const {
    backgroundImage,
    left,
    right,
    top,
    zIndex,
    width,
    height,
    translateX = '',
    translateY = '',
  } = props;
  const componentsRef = React.useRef<HTMLHeadingElement>(null);
  const [rect, setRect] = React.useState<DOMRect>();

  React.useEffect(() => {
    if (componentsRef.current) {
      setRect(componentsRef.current.getBoundingClientRect());
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (rect) {
        const mouseX_title = e.clientX - rect.left;
        const mouseY_title = e.clientY - rect.top;

        gsap.to(componentsRef.current, {
          translateX:
            ((mouseX_title - rect.width / 2) / rect.width) *
            parseInt(translateX, 10),
          translateY:
            ((mouseY_title - rect.height / 2) / rect.height) *
            parseInt(translateY, 10),
        });
      }
    });
  }, [rect, translateX, translateY]);

  return (
    <Item
      {...props}
      ref={componentsRef}
      style={{
        top: `${top}`,
        left: left ? `${left}` : 'none',
        right: right ? `${right}` : 'none',
        zIndex: zIndex,
      }}
    >
      {backgroundImage && (
        <picture>
          <figure>
            <Image
              src={backgroundImage}
              alt="Devfolio"
              loading="lazy"
              width={width}
              height={height}
            />
          </figure>
        </picture>
      )}
    </Item>
  );
};
