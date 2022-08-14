import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from '../../utils/types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

import styles from './Modal.module.css';

const Modal: React.FC<IModal> = ({ children, setIsOpened, isOpened, title }) => {
  const handleClose = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpened(false);
      }
    },
    [setIsOpened],
  );

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keydown', handleClose, false);
    }

    return () => {
      document.removeEventListener('keydown', handleClose, false);
    };
  }, [handleClose, isOpened]);

  return createPortal(
    <>
      <article className={isOpened ? styles.active_modal : styles.modal}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">{title}</p>
          <div className={styles.closeIcon} onClick={() => setIsOpened(false)}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </article>
      <ModalOverlay handleClose={handleClose} />
    </>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
