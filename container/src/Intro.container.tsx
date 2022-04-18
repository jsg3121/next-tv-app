import { Parallax } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'

const IntorContainer: React.FC = () => {
  return (
    <>
      {/* depth 1 */}
      <Parallax
        top="37%"
        right="38%"
        translateX="-45"
        translateY="-45"
        backgroundImage="/storybook.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        zIndex={20}
        delay={1}
      />
      <Parallax
        bottom="15%"
        left="28%"
        translateX="-45"
        translateY="-45"
        backgroundImage="/prisma.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        zIndex={20}
        delay={2.9}
      />
      <Parallax
        top="1%"
        left="-2%"
        translateX="-45"
        translateY="-45"
        backgroundImage="/node.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        zIndex={20}
        delay={3.75}
      />
      <Parallax
        bottom="4%"
        right="1%"
        translateX="-45"
        translateY="-45"
        backgroundImage="/javascript.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        zIndex={20}
        delay={2}
      />
      <Parallax
        top="12%"
        right="19%"
        translateX="-45"
        translateY="-45"
        backgroundImage="/redux.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        zIndex={20}
        delay={3.65}
      />
      {/* --------------------------------------- */}
      {/* depth 2 */}
      <Parallax
        bottom="0%"
        left="11%"
        translateX="-30"
        translateY="-30"
        backgroundImage="/react.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={3}
        zIndex={10}
        delay={3.7}
      />
      <Parallax
        top="29%"
        left="13%"
        translateX="-30"
        translateY="-30"
        backgroundImage="/vue.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={3}
        zIndex={10}
        delay={1.5}
      />
      <Parallax
        top="32%"
        right="6%"
        translateX="-30"
        translateY="-30"
        backgroundImage="/html.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={3}
        zIndex={10}
        delay={3.2}
      />
      <Parallax
        top="61%"
        right="21%"
        translateX="-30"
        translateY="-30"
        backgroundImage="/typescript.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={3}
        zIndex={10}
        delay={3.5}
      />
      <Parallax
        top="5%"
        left="46%"
        translateX="-30"
        translateY="-30"
        backgroundImage="/graphql.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={3}
        zIndex={10}
        delay={2.6}
      />
      {/* --------------------------------------- */}
      {/* depth 3 */}
      <Parallax
        top="11%"
        left="29%"
        translateX="-15"
        translateY="-15"
        backgroundImage="/mysql.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={5}
        zIndex={5}
        delay={3.6}
      />
      <Parallax
        top="55%"
        left="5%"
        translateX="-15"
        translateY="-15"
        backgroundImage="/mobx.svg"
        width={'5.555rem'}
        height={'5.555rem'}
        // blur={5}
        zIndex={5}
        delay={3.7}
      />
      <Parallax
        bottom="46%"
        left="33%"
        translateX="-15"
        translateY="-15"
        backgroundImage="/docker.svg"
        width={'5.555rem'}
        height={'5.555rem'}
        // blur={5}
        zIndex={5}
        delay={3.6}
      />
      <Parallax
        bottom="8%"
        left="50%"
        translateX="-15"
        translateY="-15"
        backgroundImage="/css.svg"
        width={'8.333rem'}
        height={'8.333rem'}
        // blur={5}
        zIndex={5}
        delay={3.4}
      />
    </>
  )
}

export default React.memo(IntorContainer, isEqual)
