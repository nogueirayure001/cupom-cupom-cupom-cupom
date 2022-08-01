import { useState } from 'react';

import { Form, Button } from './index';

function SingleFieldForm({
  type,
  fieldLabel,
  buttonLabel,
  darkBorder,
  onSubmit,
  clearAfterSubmit,
  ...otherProps
}) {
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    const { value } = e.target;

    setValue(value);
  };

  const submitHandler = (e) => {
    onSubmit(e);

    clearAfterSubmit && setValue('');
  };

  return (
    <Form {...otherProps} darkBorder={darkBorder} onSubmit={submitHandler}>
      <input
        darkBorder={darkBorder}
        type={type}
        value={value}
        placeholder={fieldLabel}
        onChange={changeHandler}
      />

      <Button darkBorder={darkBorder} type='submit'>
        {buttonLabel}
      </Button>
    </Form>
  );
}

export default SingleFieldForm;
