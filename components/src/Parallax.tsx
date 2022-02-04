import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

interface ParallaxProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
}

export const Item = styled((props) => {
  return <h1 {...props}></h1>;
})`
  width: 500px;
  height: 150px;
  position: absolute;
  will-change: transform;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  background-color: ${(props) => `${props.color}`};
`;

export const Parallax: NextPage<ParallaxProps> = (props) => {
  const {} = props;
  const componentsRef = React.useRef<HTMLElement>(null);
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
          translateX: ((mouseX_title - rect.width / 2) / rect.width) * -30,
          translateY: ((mouseY_title - rect.height / 2) / rect.height) * -10,
        });
      }
    });
  }, [rect]);

  return <Item {...props} ref={componentsRef}></Item>;
};
