import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: () => void;
  label: string;
}

const StyledButton = styled.button`
  color: pink;
`;

export function Button(props: Readonly<ButtonProps>) {
  return (
    <StyledButton onClick={props.onClick}>
      <h1>{props.label}</h1>
    </StyledButton>
  );
}

export default Button;
