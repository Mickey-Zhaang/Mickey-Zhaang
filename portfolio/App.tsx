import styled from 'styled-components';

import { Navbar } from './components';
import { colors } from './components/tools/color';

function App() {
  return (
    <Container>
      <Navbar
        brand="Portfolio"
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ]}
      />
      {/* Your portfolio content goes here */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.backgroundDark};
  color: ${colors.textOnDark};
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 80px; /* Account for fixed navbar height */
`;

export default App;
