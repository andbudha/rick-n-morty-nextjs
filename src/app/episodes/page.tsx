'use client';
import React, { useState } from 'react';
import styles from './episodes.module.scss';

const EpisodesPage = () => {
  console.log('Hello from episodes page!');

  const [num, setNum] = useState(0);

  return (
    <div className={styles.main_episodes_box}>
      <h1>This is episodes page!</h1>
    </div>
  );
};

export default EpisodesPage;
