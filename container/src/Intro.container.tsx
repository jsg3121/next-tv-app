import { gsap } from 'gsap';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { $Color } from '../../styles';

export const Title = styled.h1`
  width: 500px;
  height: 150px;
  background-color: #bfbfff;
  position: absolute;
  top: 150px;
  left: 150px;
  will-change: transform;
`;

export const Year = styled.h1`
  width: 500px;
  height: 150px;
  background-color: ${$Color.default.bright4};
  position: absolute;
  top: 600px;
  right: 150px;
  will-change: transform;
`;

export const IntorContainer: NextPage = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const yearRef = React.useRef<HTMLHeadingElement>(null);
  const [rectTitle, setRectTitle] = React.useState<DOMRect>();
  const [rectYear, setrectYear] = React.useState<DOMRect>();

  React.useEffect(() => {
    if (titleRef.current && yearRef.current) {
      console.log(titleRef.current.getBoundingClientRect());
      setRectTitle(titleRef.current.getBoundingClientRect());
      setrectYear(yearRef.current.getBoundingClientRect());
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (rectTitle && rectYear) {
        const mouseX_title = e.clientX - rectTitle.left;
        const mouseY_title = e.clientY - rectTitle.top;
        const mouseX_year = e.clientX - rectYear.right;
        const mouseY_year = e.clientY - rectYear.top;

        gsap.to(titleRef.current, {
          translateX:
            ((mouseX_title - rectTitle.width / 2) / rectTitle.width) * -30,
          translateY:
            ((mouseY_title - rectTitle.height / 2) / rectTitle.height) * -10,
        });
        gsap.to(yearRef.current, {
          translateX:
            ((mouseX_year - rectYear.width / 2) / rectYear.width) * -30,
          translateY:
            ((mouseY_year - rectYear.height / 2) / rectYear.height) * -10,
        });
      }
    });
  }, [rectTitle, rectYear]);

  return (
    <>
      <Title ref={titleRef} />
      <Year ref={yearRef} />
    </>
  );
};
