import { StyledForm } from './index';

function Form({ children, innerRef, ...otherProps }) {
  return (
    <StyledForm ref={innerRef} {...otherProps}>
      {children}
    </StyledForm>
  );
}

export default Form;
