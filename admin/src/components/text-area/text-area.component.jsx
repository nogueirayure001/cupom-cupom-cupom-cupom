import { StyledTextArea } from './index';

function TextArea({ label, ...otherProps }) {
  return (
    <StyledTextArea {...otherProps}>
      <textarea id={label} {...otherProps} />
      <label htmlFor={label}>{label}</label>
    </StyledTextArea>
  );
}

export default TextArea;
