import { StyledButton } from './index';

function Button({ children, innerRef, type = 'button', ...otherProps }) {
  return (
    <StyledButton type={type} {...otherProps} ref={innerRef}>
      {children}
    </StyledButton>
  );
}

export default Button;
