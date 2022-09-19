import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  subscribeToNewsletterAsync,
  changeModalState
} from '../../store/newsletter';
import { Article } from '../article';
import { Modal } from '../modal';
import { Paragraph, UserEmailField } from './index';

const ERROR_MESSAGES = {
  'E-mail already in use': 'E-mail já cadastrado anteriormente.',
  'Invalid e-mail address': 'E-mail não é valido.',
  'Sorry, the server could not complete the request':
    'Não foi possível cadastrar e-mail. Por favor, tente novamente.',
  'Failed to fetch': 'Verifique sua conexão com a internet.',
  'User subscribed to newsletter successfully':
    'E-mail cadastrado em nossa newsletter! Aguarde as novidades...'
};

function Newsletter() {
  const { showModal, message, isLoading } = useSelector(selectAll);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    const [inputField] = Array.from(e.target).filter(
      (child) => child.nodeName === 'INPUT'
    );

    const email = inputField.value;

    dispatch(subscribeToNewsletterAsync(email));
  };

  const clickHandler = () => {
    dispatch(changeModalState(false));
  };

  return (
    <Article title='Newsletter'>
      <Paragraph>
        Assine nossa newsletter e fique informado sobre os melhores cupons e
        ofertas disponíveis!
      </Paragraph>

      <UserEmailField
        noValidate
        type='email'
        fieldLabel='email@exemplo.com'
        buttonLabel='assinar'
        onSubmit={submitHandler}
        clearAfterSubmit
        isLoading={isLoading}
      />

      <Modal
        clickHandler={clickHandler}
        show={showModal}
        message={ERROR_MESSAGES[message]}
      />
    </Article>
  );
}

export default Newsletter;
