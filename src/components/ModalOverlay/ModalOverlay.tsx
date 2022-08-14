import React from 'react';
import { IModalOverlay } from '../../utils/types';

import styles from './ModalOverlay.module.css';

const ModalOverlay: React.FC<IModalOverlay> = ({ handleClose }) => {
  return <div onClick={() => handleClose()} className={styles.modalOverlay}></div>;
};

export default ModalOverlay;
