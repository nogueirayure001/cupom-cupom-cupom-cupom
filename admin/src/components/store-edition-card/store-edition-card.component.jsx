import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateStoreAsync,
  selectUpdateState,
  clearPreviousState as clearPreviousStateUpdate
} from '../../store/update-store';
import {
  deleteStoreAsync,
  selectDeleteState,
  clearPreviousState as clearPreviousStateDel
} from '../../store/delete-store';
import { loadPaginatedStoresAsync } from '../../store/stores';
import { selectToken } from '../../store/auth';
import { useCreateDefaultValues } from '../../hooks';
import { TextField } from '../text-field';
import { Checkbox } from '../checkbox';
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

const validFields = ['name', 'image', 'source', 'featured'];

function StoreEditionCard({ store }) {
  const { _id: id, ...storeFields } = store;
  const DEFAULT_FIELDS = useCreateDefaultValues(storeFields, validFields);
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
      if (update[key] !== storeFields[key]) {
        shouldSendRequest = true;
        break;
      }
    }

    if (shouldSendRequest) dispatch(updateStoreAsync(id, update, token));
  };

  const deleteHandler = async () => {
    dispatch(deleteStoreAsync(id, token));
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

    dispatch(loadPaginatedStoresAsync(token, query));

    dispatch(clearPreviousStateUpdate());
  }, [successUpdate]);

  useEffect(() => {
    if (!successDel || targetDel !== id) return;

    setShowModalDel(true);

    const query = { page };

    dispatch(loadPaginatedStoresAsync(token, query));

    dispatch(clearPreviousStateDel());
  }, [successDel]);

  useEffect(() => {
    setFields(DEFAULT_FIELDS);
  }, [store]);

  return (
    <StyledForm onChange={changeHandler} onSubmit={submitHandler} noValidate>
      <TextField
        label='Nome'
        type='text'
        pattern={'^\\S.*\\S$'}
        value={fields['name']['value']}
        name='name'
        error={!fields['name']['valid'] && fields['name']['blurred']}
      />

      <TextField
        label='Imagem'
        type='text'
        pattern={'^\\S+$'}
        value={fields['image']['value']}
        name='image'
        error={!fields['image']['valid'] && fields['image']['blurred']}
      />

      <Group>
        <TextField
          label='Fonte'
          type='text'
          pattern={'^\\S.*\\S$'}
          value={fields['source']['value']}
          name='source'
          error={!fields['source']['valid'] && fields['source']['blurred']}
        />

        <Checkbox
          label='Destacar'
          value={fields['featured'].value}
          name='featured'
          defaultChecked={fields['featured'].value}
        />
      </Group>

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

export default StoreEditionCard;
