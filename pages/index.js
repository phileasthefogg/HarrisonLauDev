import styled, {ThemeProvider} from 'styled-components';
import Title from '../components/Title.jsx';
import About from '../components/About.jsx';
import ProjectPane from '../components/ProjectPane.jsx';
import TechStack from '../components/TechStack.jsx'
import Links from '../components/Links.jsx'

const Application = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Zilla Slab', serif;
`;

const theme = {
  colors: {
    turquoise: '#45B5AA',
    mimosa: '#F0C05A',
    trueRed: '#BF1932',
    ceruleanBlue: '#9BB7D4',
    darkBlue: '#00249C',
    sandDollar: '#DECDBE'
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Application>
      <Title></Title>
      <About></About>
      <ProjectPane></ProjectPane>
      <TechStack></TechStack>
      <Links></Links>
    </Application>
    </ThemeProvider>

  )
}

export default App;
