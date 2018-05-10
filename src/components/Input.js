import styled from 'react-emotion';

// import type { ThemeState } from './typings';

type InputProps = {
  block?: boolean
}

const Input = styled('input')(({ block }: InputProps) => ({
  width: block ? '100%' : 'auto',
  border: `0.03125rem solid orange`,
  borderRadius: '0.1875rem',
  fontSize: '16',
  fontFamily: 'inherit',
  lineHeight: '1.75rem',
  paddingLeft: '1rem',
  boxSizing: 'border-box',
  ':focus': {
    outline: 'none',
  }
}));

Input.defaultProps = {
  block: false
};

export default Input;
