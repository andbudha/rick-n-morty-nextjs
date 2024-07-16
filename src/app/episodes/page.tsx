'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './episodes.module.scss';

const EpisodesPage = () => {
  console.log('Hello from episodes page!');
  const [seasonNum, setSeasonNum] = useState<number>(1);
  console.log(seasonNum);

  const getEpisodes = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode
`);
    const result = await response.json();
    console.log(result);
  };

  const selectSeasonOptionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSeasonNumber = Number(e.currentTarget.value);
    setSeasonNum(selectedSeasonNumber);
  };

  useEffect(() => {
    getEpisodes();
  }, [seasonNum]);
  return (
    <div className={styles.main_episodes_box}>
      <div className={styles.main_text_box}>
        {' '}
        <p>Choose a season: </p>
      </div>
      <div className={styles.main_select_box}>
        <select
          name="seasons"
          id="seasons"
          onChange={selectSeasonOptionHandler}
          className={styles.select_box}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
      </div>
    </div>
  );
};

export default EpisodesPage;
