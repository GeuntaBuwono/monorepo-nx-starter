import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StorybookHostProps {}

const StyledStorybookHost = styled.div`
  color: pink;
`;

export function StorybookHost(props: StorybookHostProps) {
  return (
    <StyledStorybookHost>
      <h1>Welcome to StorybookHost!</h1>
    </StyledStorybookHost>
  );
}

export default StorybookHost;
