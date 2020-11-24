import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
`;
const OverlayBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 40%;
`;
const OverlayForeground = styled.div`
  z-index: 0;
  background-color: white;
  // color: white;
  color: black;
  height: 60%;
  width: 80%;
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 200;
  font-size: 14px;
  overflow: scroll;
`;

const Image = styled.img`
  object-fit: scale-down;
  max-width: 95%;
  height: 310px;
  margin: 10px
`;
const Footer = styled.footer`
  background-color: white;
  border-top: 1px solid grey;
  width: 100%;
  height: 20%;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 5px;
`;
const H5 = styled.h5`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 1%;
  line-height: 0px;
  // text-align:center;
`;
const Info = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;
const Stack = styled.p`
  font-size: 13px;
`

const Project = ({ project, index }) => {
  const Container = styled.div`
    border-radius: 5px 10px 5px 10px;
    box-shadow: -10px 10px 0px 1px ${({ theme }) => Object.values(theme.colors) [index]};
    position: relative;
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    width: 25%;
    max-height: 425px;
    border: 1px solid grey;
    &:hover ${Overlay} {
      display: flex;
    }
    &:hover ${Image}{
      filter: blur(1px);
    }
  `;
  return (
    <Container>
      <Overlay>
        <OverlayBackground />
        <OverlayForeground>
          <p>{project.desc}</p>
        </OverlayForeground>
      </Overlay>
      <Image src={`${project.img}`}></Image>
      <Footer>
        <Info>
          <H5>{project.name}</H5>
          <Stack><b>Tech:</b> {project.techStack}</Stack>
        </Info>
      </Footer>
    </Container>
  );
};

export default Project;