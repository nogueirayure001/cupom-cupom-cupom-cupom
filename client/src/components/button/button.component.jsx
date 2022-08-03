import { StyledButton } from './index';

function Button({ children, innerRef, ...otherProps }) {
  return (
    <StyledButton type='button' {...otherProps} ref={innerRef}>
      {children}
    </StyledButton>
  );
}

export default Button;
