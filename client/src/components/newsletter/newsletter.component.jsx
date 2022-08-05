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
  'User tried to subscribe with an e-mail already in use':
    'E-mail já cadastrado anteriormente.',
  'User sent invalid e-mail address': 'E-mail não é valido.',
  'Server failed to subscribe user. Please try again':
    'Não foi possível cadastrar e-mail. Por favor, tente novamente.',
  'Failed to fetch':
    'Não é possível cadastrar no momento. Verifique sua conexão com a internet.',
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
