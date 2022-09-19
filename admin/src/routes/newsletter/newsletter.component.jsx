import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectNewsletterState,
  sendNewsletterAsync
} from '../../store/newsletter';
import { selectToken } from '../../store/auth';
import { ProtectRoute } from '../../components/protect-route';
import { Section } from '../../components/section';
import { Form } from '../../components/form';
import { TextField } from '../../components/text-field';
import { FileInput } from '../../components/file-input';
import { Spinner } from '../../components/spinner';
import { ErrorMessage, SendButton } from './newsletter.styles';

const DEFAULT_FIELDS = {
  subject: '',
  newsletter: null
};

const DEFAULT_FIELDS_VALIDITY = {
  subject: false,
  newsletter: false
};

const DEFAULT_FIELDS_BLURR_STATE = {
  subject: false,
  newsletter: false
};

function Newsletter(props) {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [fieldsValidity, setFieldsValidity] = useState(DEFAULT_FIELDS_VALIDITY);
  const [fieldsBlurr, setFieldsBlurr] = useState(DEFAULT_FIELDS_BLURR_STATE);
  const [showError, setShowError] = useState(false);
  const formRef = useRef();
  const token = useSelector(selectToken);
  const { isLoading, error, success } = useSelector(selectNewsletterState);
  const dispatch = useDispatch();

  const createErrorMessage = () => {
    if (error) {
      return 'O envio falhou. Tente novamente';
    }

    if (!fieldsValidity['subject'] && !fieldsValidity['newsletter']) {
      return 'Preencha todos os campos adequadamente';
    }

    if (!fieldsValidity['subject']) {
      return "O campo 'Assunto' não pode ser nulo";
    }

    if (!fieldsValidity['newsletter']) {
      return 'Selecione um arquivo html para enviar';
    }
  };

  const blurrFields = () => {
    const fieldKeys = Object.keys(fieldsBlurr);

    const updatedFieldsBlurr = fieldKeys.reduce((previousObj, currentKey) => {
      previousObj[currentKey] = true;

      return previousObj;
    }, {});

    setFieldsBlurr(updatedFieldsBlurr);
  };

  const updateFieldsValue = () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const updatedFields = Object.fromEntries(formData);

    setFields(updatedFields);
  };

  const updateErrorStatus = (e) => {
    const { name, value, pattern } = e.target;
    const patternRegex = new RegExp(pattern);

    setFieldsBlurr({ ...fieldsBlurr, [name]: true });
    setFieldsValidity({ ...fieldsValidity, [name]: patternRegex.test(value) });
  };

  const areFieldsValid = () => {
    return Object.values(fieldsValidity).every((isValid) => isValid);
  };

  const changeHandler = (e) => {
    updateFieldsValue();
    updateErrorStatus(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const isFormValid = areFieldsValid();

    if (!isFormValid) {
      blurrFields();
      setShowError(true);
      return;
    }

    dispatch(sendNewsletterAsync(formData, token));
  };

  useEffect(() => {
    if (!success) return;

    setFields(DEFAULT_FIELDS);
  }, [success]);

  useEffect(() => {
    const isFormValid = areFieldsValid();

    if (!isFormValid) return;

    setShowError(false);
  }, [fieldsValidity]);

  return (
    <ProtectRoute>
      <Section title='Newsletter'>
        <Form
          innerRef={formRef}
          onSubmit={submitHandler}
          onChange={changeHandler}
        >
          <TextField
            label='Assunto'
            name='subject'
            value={fields['subject']}
            pattern='^[\w ]+$'
            error={!fieldsValidity['subject'] && fieldsBlurr['subject']}
          />

          <FileInput
            label='Selecionar arquivo...'
            name='newsletter'
            value={fields['newsletter']}
            pattern='\.html$'
            accept='.html'
            error={!fieldsValidity['newsletter'] && fieldsBlurr['newsletter']}
          />

          <ErrorMessage show={showError}>{createErrorMessage()}</ErrorMessage>

          <SendButton type='submit'>
            {isLoading ? <Spinner mini /> : 'Enviar'}
          </SendButton>
        </Form>
      </Section>
    </ProtectRoute>
  );
}

export default Newsletter;
