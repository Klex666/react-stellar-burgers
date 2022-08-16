import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from '../../utils/types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

import styles from './Modal.module.css';

const Modal: React.FC<IModal> = ({ children, setIsOpened, isOpened, title }) => {
  const closePopup = useCallback(() => {
    setIsOpened(false);
  }, [setIsOpened]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    },
    [closePopup],
  );

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keydown', handleEscape, false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpened]);

  return createPortal(
    <>
      <article className={isOpened ? styles.active_modal : styles.modal}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">{title}</p>
          <div className={styles.closeIcon} onClick={() => closePopup()}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </article>
      <ModalOverlay closePopup={closePopup} />
    </>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
