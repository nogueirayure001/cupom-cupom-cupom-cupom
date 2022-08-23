import { InputContainer } from './index';
import { nanoid } from 'nanoid';

function Input({ label, value, type, ...otherProps }) {
  const id = nanoid();

  return (
    <InputContainer {...otherProps}>
      <input type={type} id={id} value={value} {...otherProps} />

      {label && <label htmlFor={id}>{label}</label>}
    </InputContainer>
  );
}

export default Input;
