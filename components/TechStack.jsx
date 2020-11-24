import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import techStack from '../public/techStack.js'

const Section = styled.section`
  position: relative;
  margin-top: 20px;
  margin-bottom: 100px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 5px 10px 5px 10px;
  box-shadow: -10px 10px 0px 1px ${({theme}) => theme.colors.ceruleanBlue};

  border: 1px solid grey;
`;
const Header = styled.header`
  border-radius: 5px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
  border-bottom: 1px solid grey;
`;
const H3 = styled.h3`
  font-size: 20px;
`;
const TechList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const Stack = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  width: 100%;
  border: 1px solid grey;
  padding: 5px;
  padding-top: 0px;
  // padding-top: 10px;
  margin-top: 0px;
  background-color: white;
  border-radius: 5px 10px 5px 10px;
`;
const Item = styled.li`
  // text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  // border-bottom: 1px solid black;
  height: 25px;
  font-size: 18px;
  &:last-child {
    border: none;
  }
`;
const H4 = styled.h4`
  font-size: 18px;
  color: black;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  width: 70%;
  text-align: center;
`;

const TechStack = () => {
  return (
    <Section>
      <Header>
        <H3>Tech Stack</H3>
      </Header>
      <TechList>
        <Stack>
          <List>
          <H4>Front End</H4>
            {techStack.frontEnd.map((tech, i) =>
              <Item key={`fe-${i}`}>{tech}</Item>
            )}
          </List>
        </Stack>
        <Stack>
          <List>
          <H4>Back End</H4>
          {techStack.backEnd.map((tech, i) =>
              <Item key={`fe-${i}`}>{tech}</Item>
            )}
          </List>
        </Stack>
        <Stack>
          <List>
          <H4>Relevant</H4>
          {techStack.development.map((tech, i) =>
              <Item key={`fe-${i}`}>{tech}</Item>
            )}
          </List>
        </Stack>
      </TechList>
    </Section>
  );
};

export default TechStack;