import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import projectData from '../public/projects.js'

import Project from './Project.jsx'

const Section = styled.section`
border-radius: 5px 10px 5px 10px;
border: 1px solid black;
padding-bottom: 50px;
  margin-top: 200px;
  margin-bottom: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H3 = styled.h3`
  font-size: 20px;
`;
const ProjectList = styled.div`
  width: 100%;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const ProjectPane = () => {
  return (
    <Section>
      <Header>
        <H3>Projects</H3>
      </Header>
      <ProjectList>
        {projectData.map((project, i) =>
          <Project key={`project-${i}`} project={project} index={i}/>
        )}
      </ProjectList>
    </Section>
  );
};

export default ProjectPane;