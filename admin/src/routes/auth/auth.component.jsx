import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuthState, loginAsync } from '../../store/auth';
import { validate } from '../../utils';
import { Section } from '../../components/section';
import { Form } from '../../components/form';
import { TextField } from '../../components/text-field';
import { Spinner } from '../../components/spinner';
import { CreateButton, ErrorMessage } from './index';

const MESSAGES = {
  'Could not send request': 'Não foi possível enviar a requisição',
  'Did not pass data validation': 'Preencha os campos corretamente',
  'Sorry, the server could not complete the request':
    'O servidor falhou e não conseguiu completar a requisição. Porfavor tente novamente'
};

const DEFAULT_FORM_STATE = {
  email: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  password: { value: '', pattern: /^\S+$/, valid: false, blurred: false }
};

function Authenticate(props) {
  const [fields, setFields] = useState(DEFAULT_FORM_STATE);
  const [errorMessage, setErrorMessage] = useState(false);
  const { isLoading, user, error } = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: {
        ...fields[name],
        value,
        valid: fields[name]['pattern'].test(value),
        blurred: true
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validate(fields)) {
      const updatedFields = { ...fields };

      for (const field in updatedFields) {
        updatedFields[field]['blurred'] = true;
      }

      setFields(updatedFields);

      setErrorMessage(MESSAGES['Did not pass data validation']);

      return;
    }

    const credentials = {
      email: fields['email'].value,
      password: fields['password'].value
    };

    dispatch(loginAsync(credentials));
  };

  useEffect(() => {
    if (!error) return;

    setErrorMessage(MESSAGES[error]);
  }, [error]);

  useEffect(() => {
    if (!validate(fields)) return;

    if (error !== 'Did not pass data validation') return;

    setErrorMessage(MESSAGES[error]);
  }, [fields]);

  useEffect(() => {
    if (user) navigate('/admin', { replace: true });
  }, [user]);

  return (
    <Section title='AUTENTIQUE-SE'>
      <Form onChange={changeHandler} onSubmit={submitHandler} noValidate>
        <TextField
          label='E-mail'
          value={fields.email.value}
          type='email'
          name='email'
          error={!fields.email.valid && fields.email.blurred}
        />

        <TextField
          label='Senha'
          value={fields.password.value}
          type='password'
          name='password'
          error={!fields.password.valid && fields.password.blurred}
        />

        <ErrorMessage show={errorMessage && true}>{errorMessage}</ErrorMessage>

        <CreateButton type='submit'>
          {isLoading ? <Spinner mini /> : 'Autenticar'}
        </CreateButton>
      </Form>
    </Section>
  );
}

export default Authenticate;
