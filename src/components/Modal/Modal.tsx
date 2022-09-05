import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { IModal } from "../../utils/types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

import styles from "./Modal.module.css";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Modal: React.FC<IModal> = ({ closeModal, isOpened, title, children }) => {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("keydown", handleEscape, false);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpened]);

  return createPortal(
    <>
      <article className={isOpened ? styles.active_modal : styles.modal}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">{title}</p>
          <div className={styles.closeIcon} onClick={() => closeModal()}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </article>
      <ModalOverlay closePopup={closeModal} />
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
