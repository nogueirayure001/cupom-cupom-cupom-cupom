import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCreationState,
  createCouponAsync
} from '../../store/create-coupon';
import { validate } from '../../utils';
import { selectStores, loadStoresAsync } from '../../store/stores';
import { Section } from '../../components/section';
import { Form } from '../../components/form';
import { Select } from '../../components/select';
import { TextField } from '../../components/text-field';
import { TextArea } from '../../components/text-area';
import { Checkbox } from '../../components/checkbox';
import { Group } from '../../components/group';
import { Spinner } from '../../components/spinner';
import { Modal } from '../../components/modal';
import { CreateButton, ErrorMessage } from './index';

const MESSAGES = {
  'Could not send request': 'Não foi possível enviar a requisição',
  Success: 'Cupom criado com sucesso',
  'Did not pass data validation':
    'Cupom invalidado. Preencha os campos corretamente',
  'Sorry, the server could not complete the request':
    'O servidor falhou e não conseguiu completar a requisição. Porfavor tente novamente'
};

const DEFAULT_FORM_STATE = {
  store: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  description: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  code: { value: '', pattern: /^\S+$/, valid: false, blurred: false },
  category: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  link: { value: '', pattern: /^\S+$/, valid: false, blurred: false },
  image: { value: '', pattern: /^\S+$/, valid: false, blurred: false },
  source: { value: '', pattern: /^\S.*\S$/, valid: false, blurred: false },
  featured: { value: false, valid: true }
};

function CouponsCreation(props) {
  const [fields, setFields] = useState(DEFAULT_FORM_STATE);
  const [showModal, setShowModal] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const { isLoading, error, success } = useSelector(selectCreationState);
  const stores = useSelector(selectStores);
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

    let coupon = {};

    for (const [field, values] of Object.entries(fields)) {
      coupon[field] = values['value'];
    }

    dispatch(createCouponAsync({ couponToAdd: coupon }));

    return;
  };

  const modalClickHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(loadStoresAsync);
  }, []);

  useEffect(() => {
    if (!validate(fields)) return;

    setShowValidationMessage(false);
  }, [fields]);

  useEffect(() => {
    if (error || success) setShowModal(true);
  }, [error, success]);

  return (
    <Section title='Adicionar Cupom'>
      <Form onChange={changeHandler} onSubmit={submitHandler}>
        <Group>
          <Select
            label='Loja'
            name='store'
            options={stores.map((store) => store.name)}
            changeHandler={changeHandler}
            error={!fields.store.valid && fields.store.blurred}
          />

          <TextField
            label='Fonte'
            value={fields.source.value}
            type='text'
            name='source'
            error={!fields.source.valid && fields.source.blurred}
          />
        </Group>

        <Group>
          <TextField
            label='Código'
            value={fields.code.value}
            type='text'
            name='code'
            error={!fields.code.valid && fields.code.blurred}
          />

          <TextField
            label='Categoria'
            value={fields.category.value}
            type='text'
            name='category'
            error={!fields.category.valid && fields.category.blurred}
          />
        </Group>

        <TextField
          label='Link'
          value={fields.link.value}
          type='text'
          name='link'
          error={!fields.link.valid && fields.link.blurred}
        />

        <TextField
          label='Imagem'
          value={fields.image.value}
          type='text'
          name='image'
          error={!fields.image.valid && fields.image.blurred}
        />

        <TextArea
          label='Descrição'
          value={fields.description.value}
          name='description'
          error={!fields.description.valid && fields.description.blurred}
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

export default CouponsCreation;
