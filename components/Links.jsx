import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid grey;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H3 = styled.h3`
  font-size: 20px;
`;

const Links = () => {
  return (
    <Section>
      <Header>
        <H3>Links</H3>
      </Header>
    </Section>
  );
};

export default Links;