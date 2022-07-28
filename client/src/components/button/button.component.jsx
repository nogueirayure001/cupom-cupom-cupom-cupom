import { StyledButton } from './index';

function Button({ children, ...otherProps }) {
  return (
    <StyledButton type='button' {...otherProps}>
      {children}
    </StyledButton>
  );
}

export default Button;
