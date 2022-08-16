import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCreationState,
  createStoreAsync,
  clearPreviousState
} from '../../store/create-store';
import { validate } from '../../utils';
import { Section } from '../../components/section';
import { Form } from '../../components/form';
import { TextField } from '../../components/text-field';
import { Checkbox } from '../../components/checkbox';
import { Spinner } from '../../components/spinner';
import { Modal } from '../../components/modal';
import { CreateButton, ErrorMessage } from './index';

const MESSAGES = {
  'Could not send request': 'Não foi possível enviar a requisição',
  Success: 'Loja criada com sucesso',
  'Did not pass data validation':
    'Loja invalidada. Preencha os campos corretamente',
  'Sorry, the server could not complete the request':
    'O servidor falhou e não conseguiu completar a requisição. Porfavor tente novamente'
};

const DEFAULT_FORM_STATE = {
  name: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  image: { value: '', pattern: /^\S+$/, valid: false, blurred: false },
  source: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  featured: { value: false, valid: true }
};

function StoresCreation(props) {
  const [fields, setFields] = useState(DEFAULT_FORM_STATE);
  const [showModal, setShowModal] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const { isLoading, error, success } = useSelector(selectCreationState);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { type, name, value, checked } = e.target;

    if (type === 'checkbox') {
      setFields({ ...fields, [name]: { ...fields[name], value: checked } });

      return;
    }

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

      setShowValidationMessage(true);

      return;
    }

    let store = {};

    for (const [field, values] of Object.entries(fields)) {
      store[field] = values['value'];
    }

    dispatch(createStoreAsync({ storeToAdd: store }));

    return;
  };

  const modalClickHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!validate(fields)) return;

    setShowValidationMessage(false);
  }, [fields]);

  useEffect(() => {
    if (error || success) setShowModal(true);
  }, [error, success]);

  useEffect(() => {
    if (success) {
      setFields(DEFAULT_FORM_STATE);
      dispatch(clearPreviousState());
    }
  }, [success]);

  return (
    <Section title='Adicionar Loja'>
      <Form onChange={changeHandler} onSubmit={submitHandler}>
        <TextField
          label='Nome'
          value={fields.name.value}
          type='text'
          name='name'
          error={!fields.name.valid && fields.name.blurred}
        />

        <TextField
          label='Imagem'
          value={fields.image.value}
          type='text'
          name='image'
          error={!fields.image.valid && fields.image.blurred}
        />

        <TextField
          label='Fonte'
          value={fields.source.value}
          type='text'
          name='source'
          error={!fields.source.valid && fields.source.blurred}
        />

        <Checkbox
          label='Destacar'
          value={fields.featured.value}
          name='featured'
          checked={fields.featured.value}
        />

        <ErrorMessage show={showValidationMessage}>
          Todos os campos devem estar preenchidos
        </ErrorMessage>

        <CreateButton type='submit'>
          {isLoading ? <Spinner mini /> : 'Criar'}
        </CreateButton>
      </Form>

      <Modal
        show={showModal}
        message={MESSAGES[error ? error : 'Success']}
        clickHandler={modalClickHandler}
      />
    </Section>
  );
}

export default StoresCreation;
