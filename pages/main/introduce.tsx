import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { IntorContainer } from '../../container';
import { $Color } from '../../styles';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${$Color.default.dark4};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Introduce: NextPage = () => {
  return (
    <Main>
      <IntorContainer />
    </Main>
  );
};

export default Introduce;
