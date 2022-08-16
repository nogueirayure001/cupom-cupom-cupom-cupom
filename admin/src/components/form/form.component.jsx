import { StyledForm } from './index';

function Form({ children, ...otherProps }) {
  return (
    <StyledForm className='form' {...otherProps}>
      {children}
    </StyledForm>
  );
}

export default Form;
