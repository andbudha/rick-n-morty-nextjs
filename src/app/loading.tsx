import React from 'react';
import styles from './loading.module.scss';

const Loader = () => {
  return (
    <div className={styles.main_loader_box}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
