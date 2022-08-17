import React from 'react';
import { IModalOverlay } from '../../utils/types';

import styles from './ModalOverlay.module.css';

const ModalOverlay: React.FC<IModalOverlay> = ({ closePopup }) => {
  return <div onClick={() => closePopup()} className={styles.modalOverlay}></div>;
};

export default ModalOverlay;
