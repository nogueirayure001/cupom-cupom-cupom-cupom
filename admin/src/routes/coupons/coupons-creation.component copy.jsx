import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCreationState,
  createCouponAsync
} from '../../store/create-coupon';
import { selectStores, loadStoresAsync } from '../../store/stores';
import { Section } from '../../components/section';
import { Form } from '../../components/form';
import { Select } from '../../components/select';
import { TextField } from '../../components/text-field';
import { TextArea } from '../../components/text-area';
import { Checkbox } from '../../components/checkbox';
import { Group } from '../../components/group';
import { Spinner } from '../../components/spinner';
import { CreateButton } from './index';

const DEFAULT_FORM_STATE = {
  store: '',
  description: '',
  code: '',
  category: '',
  link: '',
  image: '',
  featured: true,
  source: ''
};

function CouponsCreation(props) {
  const [fields, setFields] = useState(DEFAULT_FORM_STATE);
  const { isLoading, error } = useSelector(selectCreationState);
  const stores = useSelector(selectStores);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { type, name, value, checked } = e.target;

    if (type === 'checkbox') {
      setFields({ ...fields, [name]: checked });

      return;
    }

    setFields({ ...fields, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createCouponAsync({ couponToAdd: fields }));
  };

  useEffect(() => {
    dispatch(loadStoresAsync);
  }, []);

  return (
    <Section title='Adicionar Cupom'>
      <Form onChange={changeHandler} onSubmit={submitHandler}>
        <Group>
          <Select
            label='Loja'
            name='store'
            options={stores.map((store) => store.name)}
            changeHandler={changeHandler}
          />

          <TextField
            label='Fonte'
            value={fields.source}
            type='text'
            name='source'
            valid={false}
          />
        </Group>

        <Group>
          <TextField
            label='Código'
            value={fields.code}
            type='text'
            name='code'
          />

          <TextField
            label='Categoria'
            value={fields.category}
            type='text'
            name='category'
          />
        </Group>

        <TextField label='Link' value={fields.link} type='text' name='link' />

        <TextField
          label='Imagem'
          value={fields.image}
          type='text'
          name='image'
        />

        <TextArea
          label='Descrição'
          value={fields.description}
          name='description'
        />

        <Checkbox label='Destacar' value={fields.featured} name='featured' />

        <CreateButton type='submit'>
          {isLoading ? <Spinner mini /> : 'Criar'}
        </CreateButton>
      </Form>
    </Section>
  );
}

export default CouponsCreation;
