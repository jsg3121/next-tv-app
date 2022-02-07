import { gsap } from 'gsap';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

interface ParallaxProps {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  color?: string;
  translateX?: string;
  translateY?: string;
}

export const Item = styled.h1`
  width: 500px;
  height: 150px;
  position: absolute;
  will-change: transform;
`;

export const Parallax: NextPage<ParallaxProps> = (props) => {
  const { color, left, right, top, translateX = '', translateY = '' } = props;
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
        backgroundColor: `${color}`,
      }}
    ></Item>
  );
};
