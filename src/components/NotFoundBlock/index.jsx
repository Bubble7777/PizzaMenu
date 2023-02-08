import React from 'react';

import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ничего не найденно
      </h1>
      <p className={styles.desc}>К сожалению ничего не было найденно</p>
    </div>
  );
};

export default NotFoundBlock;
