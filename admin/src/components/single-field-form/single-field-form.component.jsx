import { useState } from 'react';

import { Form, SingleFieldContainer, Button, StyledSpinner } from './index';

function SingleFieldForm(props) {
  const {
    children,
    type,
    fieldLabel,
    buttonLabel,
    darkBorder,
    onSubmit,
    clearAfterSubmit,
    insideRef,
    isLoading,
    ...otherProps
  } = props;

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
    <Form {...otherProps} ref={insideRef} onSubmit={submitHandler}>
      <SingleFieldContainer darkBorder={darkBorder}>
        <input
          darkBorder={darkBorder}
          type={type}
          value={value}
          placeholder={fieldLabel}
          onChange={changeHandler}
        />

        <Button darkBorder={darkBorder} type='submit'>
          {isLoading ? <StyledSpinner mini /> : buttonLabel}
        </Button>
      </SingleFieldContainer>

      {children}
    </Form>
  );
}

export default SingleFieldForm;
