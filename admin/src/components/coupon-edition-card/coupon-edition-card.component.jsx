import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateCouponAsync,
  selectUpdateState,
  clearPreviousState as clearPreviousStateUpdate
} from '../../store/update-coupon';
import {
  deleteCouponAsync,
  selectDeleteState,
  clearPreviousState as clearPreviousStateDel
} from '../../store/delete-coupon';
import { loadPaginatedCouponsAsync } from '../../store/coupons';
import { selectStores } from '../../store/stores';
import { selectToken } from '../../store/auth';
import { useCreateDefaultValues } from '../../hooks';
import { TextField } from '../text-field';
import { TextArea } from '../text-area';
import { Checkbox } from '../checkbox';
import { Select } from '../select';
import { Group } from '../group';
import { Spinner } from '../spinner';
import { Modal } from '../modal';
import { StyledForm, StyledButton, DeleteButton, ErrorMessage } from './index';

const MESSAGES = {
  Success: 'Operação realizada com sucesso',
  'Could not send request': 'Não foi possível enviar a requisição',
  'Did not pass data validation':
    'Loja invalidada. Preencha os campos corretamente',
  'Sorry, the server could not complete the request':
    'O servidor falhou e não conseguiu completar a requisição. Porfavor tente novamente'
};

const validFields = [
  'category',
  'code',
  'description',
  'featured',
  'image',
  'link',
  'source',
  'store'
];

function CouponEditionCard({ coupon }) {
  const { _id: id, ...couponFields } = coupon;
  const DEFAULT_FIELDS = useCreateDefaultValues(couponFields, validFields);
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const {
    target: targetUpdate,
    isLoading: isLoadingUpdate,
    error: errorUpdate,
    success: successUpdate
  } = useSelector(selectUpdateState);
  const {
    target: targetDel,
    isLoading: isLoadingDel,
    error: errorDel,
    success: successDel
  } = useSelector(selectDeleteState);
  const stores = useSelector(selectStores);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const { page } = useParams();

  const changeHandler = async (e) => {
    const { type, pattern, name, value, checked } = e.target;

    if (type === 'checkbox') {
      setFields({ ...fields, [name]: { ...fields[name], value: checked } });

      return;
    }

    const patternRegex = new RegExp(pattern);

    const valid = patternRegex.test(value);

    setFields({
      ...fields,
      [name]: { ...fields[name], value, valid, blurred: true }
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let update = {};

    for (const [field, values] of Object.entries(fields)) {
      if (!values['valid']) {
        setShowValidationMessage(true);
        return;
      }

      update[field] = values['value'];
    }

    let shouldSendRequest = false;
    for (const key of Object.keys(update)) {
      if (update[key] !== couponFields[key]) {
        shouldSendRequest = true;
        break;
      }
    }

    if (shouldSendRequest) dispatch(updateCouponAsync(id, update, token));
  };

  const deleteHandler = async () => {
    dispatch(deleteCouponAsync(id, token));
  };

  const cancelHandler = async () => {
    setFields(DEFAULT_FIELDS);
  };

  const modalClickHandler = () => {
    if (showModalUpdate) setShowModalUpdate(false);

    if (showModalDel) setShowModalDel(false);
  };

  useEffect(() => {
    for (const [_, values] of Object.entries(fields)) {
      if (!values['valid']) return;
    }

    setShowValidationMessage(false);
  }, [fields]);

  useEffect(() => {
    if (!successUpdate || targetUpdate !== id) return;

    setShowModalUpdate(true);

    const query = { page };

    dispatch(loadPaginatedCouponsAsync(token, query));

    dispatch(clearPreviousStateUpdate());
  }, [successUpdate]);

  useEffect(() => {
    if (!successDel || targetDel !== id) return;

    setShowModalDel(true);

    const query = { page };

    dispatch(loadPaginatedCouponsAsync(token, query));

    dispatch(clearPreviousStateDel());
  }, [successDel]);

  useEffect(() => {
    setFields(DEFAULT_FIELDS);
  }, [coupon]);

  return (
    <StyledForm onChange={changeHandler} onSubmit={submitHandler} noValidate>
      <Group>
        <Select
          label='Loja'
          name='store'
          initialValue={fields['store']['value']}
          options={stores.map((store) => store.name)}
          changeHandler={changeHandler}
          error={!fields['store']['valid'] && fields['store']['blurred']}
        />

        <TextField
          label='Fonte'
          type='text'
          pattern={'^\\S.*\\S$'}
          value={fields['source']['value']}
          name='source'
          error={!fields['source']['valid'] && fields['source']['blurred']}
        />
      </Group>

      <Group>
        <TextField
          label='Código'
          type='text'
          pattern={'^\\S.*\\S$'}
          value={fields['code']['value']}
          name='code'
          error={!fields['code']['valid'] && fields['code']['blurred']}
        />

        <TextField
          label='Categoria'
          type='text'
          pattern={'^\\S.*\\S$'}
          value={fields['category']['value']}
          name='category'
          error={!fields['category']['valid'] && fields['category']['blurred']}
        />
      </Group>

      <TextField
        label='Link'
        type='text'
        pattern={'^\\S.*\\S$'}
        value={fields['link']['value']}
        name='link'
        error={!fields['link']['valid'] && fields['link']['blurred']}
      />

      <TextField
        label='Imagem'
        type='text'
        pattern={'^\\S.*\\S$'}
        value={fields['image']['value']}
        name='image'
        error={!fields['image']['valid'] && fields['image']['blurred']}
      />

      <TextArea
        label='Descrição'
        value={fields['description']['value']}
        name='description'
        error={
          !fields['description']['valid'] && fields['description']['blurred']
        }
      />

      <Checkbox
        label='Destacar'
        value={fields['featured']['value']}
        name='featured'
        checked={fields['featured']['value']}
      />

      <ErrorMessage show={showValidationMessage}>
        Preencha todos os campos corretamente
      </ErrorMessage>

      <Group>
        <StyledButton type='button' onClick={cancelHandler}>
          cancelar
        </StyledButton>

        <StyledButton type='submit'>
          {isLoadingUpdate && targetUpdate === id ? (
            <Spinner mini />
          ) : (
            'aplicar'
          )}
        </StyledButton>
      </Group>

      <DeleteButton type='button' onClick={deleteHandler}>
        {isLoadingDel && targetDel === id ? <Spinner mini /> : 'deletar'}
      </DeleteButton>

      <Modal
        show={showModalUpdate}
        message={MESSAGES[errorUpdate ? errorUpdate : 'Success']}
        clickHandler={modalClickHandler}
      />

      <Modal
        show={showModalDel}
        message={MESSAGES[errorDel ? errorDel : 'Success']}
        clickHandler={modalClickHandler}
      />
    </StyledForm>
  );
}

export default CouponEditionCard;
