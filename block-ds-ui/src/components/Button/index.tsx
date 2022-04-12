import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const Button = styled.button<Props>`
  color: white;
  background-color: ${({ variant = 'primary', theme }) =>
    theme.light.backgroundColor[variant].main};
  border: none;
  &:hover {
    background-color: ${({ variant = 'primary', theme }) =>
      theme.light.backgroundColor[variant].hovered};
  }
  padding-block: 10px;
  padding-inline: 15px;
`;

export default Button;
