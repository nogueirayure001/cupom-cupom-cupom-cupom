import { Label } from './index';

function FileInput({ label, error, value, ...otherProps }) {
  return (
    <Label error={error} content={value?.name}>
      {label}
      <input type='file' {...otherProps} />
    </Label>
  );
}

export default FileInput;
