import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Container = styled.div`
  flex: 1;
  width: 100%;
  min-height: 750px;
  height: 100%;
  // border: 1px inset ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 60px;
`;
const H2 = styled.h2`
  font-weight: bold;
  font-size: 30px;
`;

const Title = () => {
  return (
    <Container>
      <H1> Harrison Lau </H1>
      <H2> Let's build something </H2>
      <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 600 }} avgTypingDelay={90} stdTypingDelay={50}>
        <span className="stack"> Front-End Developer</span>
        <Typist.Backspace style={{ color: "white" }} count={19} delay={1000} />
        <span className="stack"> Back-End Developer</span>
        <Typist.Backspace count={20} delay={500} />
        <span className="stack"> Full-Stack Developer</span>
        <Typist.Delay ms={1200} />
        .
      </Typist>
    </Container>
  );
};

export default Title;