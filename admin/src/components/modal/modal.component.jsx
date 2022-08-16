import { useEffect, useRef } from 'react';

import { useOutsideClickCloser } from '../../hooks/index';
import { ModalContainer, ModalBox, Message, CloseButton } from './index';

function Modal({ show, message, clickHandler, ...otherProps }) {
  const modalBoxRef = useRef();
  const closeButtonRef = useRef();

  useEffect(() => {
    if (!closeButtonRef) return;

    closeButtonRef.current.focus();
  }, [show, closeButtonRef]);

  useOutsideClickCloser(modalBoxRef, clickHandler);

  return (
    <ModalContainer {...otherProps} show={show}>
      <ModalBox titleLevel='h4' title='Mensagem' innerRef={modalBoxRef}>
        <Message>{message}</Message>

        <CloseButton onClick={clickHandler} innerRef={closeButtonRef}>
          ok
        </CloseButton>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
