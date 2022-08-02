import { InputContainer } from './index';

function Input({ label, value, type, ...otherProps }) {
  return (
    <InputContainer {...otherProps}>
      <input type={type} id={label} value={value} {...otherProps} />

      {label && <label htmlFor={label}>{label}</label>}
    </InputContainer>
  );
}

export default Input;
