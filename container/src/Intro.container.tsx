import type { NextPage } from 'next';
import React from 'react';
import { Parallax } from '../../components';

export const IntorContainer: NextPage = () => {
  return (
    <>
      <Parallax
        top="150px"
        left="150px"
        color="red"
        translateX="-80"
        translateY="-30"
      />
      <Parallax
        top="600px"
        right="150px"
        color="blue"
        translateX="-75"
        translateY="-30"
      />
      <Parallax
        top="200px"
        left="600px"
        color="yellow"
        translateX="-30"
        translateY="-10"
      />
      <Parallax
        top="300px"
        left="800px"
        color="green"
        translateX="-45"
        translateY="-17"
      />
    </>
  );
};
