import { useState } from 'react';

import { Form, Button } from './index';

function SingleFieldForm({
  type,
  fieldLabel,
  buttonLabel,
  inverted,
  ...otherProps
}) {
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    const { value } = e.target;

    setValue(value);
  };

  return (
    <Form {...otherProps} inverted={inverted}>
      <input
        inverted={inverted}
        type={type}
        value={value}
        placeholder={fieldLabel}
        onChange={changeHandler}
      />

      <Button inverted={inverted} type='submit'>
        {buttonLabel}
      </Button>
    </Form>
  );
}

export default SingleFieldForm;
