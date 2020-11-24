import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 100px;
  position: relative;
  border: 1px solid black;
  width: 60%;
  min-height: 350px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: -10px 10px 0px 1px ${({ theme }) => theme.colors.sandDollar};
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-top: 5px;
`;
const H3 = styled.h3`
  font-size: 20px;
`;
const P = styled.p`
  width: 80%;
  font-size: 18px;
  line-height: 30px;
`;

const About = () => {
  return (
    <Section>
      <Header>
        <H3>About Me</H3>
      </Header>
      <P>
        Software engineer with extensive experience learning new things quickly.  React developer, architect of RESTful APIs, database schema designer, and search engine optimization specialist.  Advocate of human-readable code and user-centered design.  Skilled Javascript developer whose technical acumen and passion for teaching has helped hundreds of talented coders learn the fundamentals of modern web development.
      </P>
    </Section>
  );
};

export default About;