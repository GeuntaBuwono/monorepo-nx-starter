import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App({title}:{title: string}) {
  return (
    <StyledApp>
      <NxWelcome title={title} />
    </StyledApp>
  );
}

export default App;
