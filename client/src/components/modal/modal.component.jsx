import { ModalContainer, ModalBox, Message, CloseButton } from './index';

function Modal({ message, clickHandler }) {
  return (
    <ModalContainer>
      <ModalBox titleLevel='h4' title='Mensagem'>
        <Message>{message}</Message>

        <CloseButton onClick={clickHandler}>ok</CloseButton>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
