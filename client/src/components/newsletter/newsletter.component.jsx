import { Article } from '../article';
import { Modal } from '../modal';
import { Paragraph, UserEmailField } from './index';
import { httpFetchAPIResource } from '../../utils/requests';
import { useState } from 'react';

const ERROR_MESSAGES = {
  'User tried to subscribe with an e-mail already in use':
    'E-mail já cadastrado anteriormente.',
  'User sent invalid e-mail address': 'E-mail não é valido.',
  'Server failed to subscribe user. Please try again':
    'Não foi possível cadastrar e-mail. Por favor, tente novamente.'
};

function Newsletter() {
  const [modal, setModal] = useState({ show: false, message: '' });

  const submitHandler = async (e) => {
    e.preventDefault();

    const children = Array.from(e.target);
    const [inputField] = children.filter((child) => child.nodeName === 'INPUT');

    const email = inputField.value;

    const requestConfigs = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    };

    const { requestInfo } = await httpFetchAPIResource(
      '/newsletter/subscribe',
      {},
      requestConfigs
    );

    const { success, message } = requestInfo;

    if (!success) {
      setModal({ show: true, message: ERROR_MESSAGES[message] });
    } else {
      setModal({
        show: true,
        message:
          'E-mail cadastrado em nossa newsletter! Aguarde as novidades...'
      });
    }
  };

  const clickHandler = () => {
    setModal({
      show: false,
      message: ''
    });
  };

  return (
    <Article title='Newsletter'>
      <Paragraph>
        Assine nossa newsletter e fique informado das melhores ofertas e cupons!
      </Paragraph>

      <UserEmailField
        noValidate
        type='email'
        fieldLabel='email@exemplo.com'
        buttonLabel='assinar'
        onSubmit={submitHandler}
        clearAfterSubmit
      />

      <Modal
        clickHandler={clickHandler}
        show={modal.show}
        message={modal.message}
      />
    </Article>
  );
}

export default Newsletter;
