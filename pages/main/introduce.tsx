import { IntorContainer, NoticeContainer } from 'container';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { $Color } from 'styles';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${$Color.default.dark3};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Introduce: NextPage = () => {
  return (
    <Main>
      <IntorContainer />
      <NoticeContainer />
    </Main>
  );
};

export default Introduce;
