'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './episodes.module.scss';
import { Episode } from '@/models/custom-types';
import Loader from '../loading';

const EpisodesPage = () => {
  const [seasonNum, setSeasonNum] = useState<number>(1);
  const [episodes, setEpisodes] = useState<null | Episode[]>(null);
  console.log(episodes);

  const getSeason = async (season: number) => {
    let headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Content-Type': 'application/json',
    };

    let gqlBody = {
      query: `query{
  episodes (page: 1 filter: { episode: "S0${season}" }) {
    results {
      name
      episode
      characters {
        image
      }
    }
   
  }
}`,
      variables: '{}',
    };

    let bodyContent = JSON.stringify(gqlBody);

    let response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    });

    const data = await response.json();
    if (data) {
      setEpisodes(data.data.episodes.results);
    }
  };

  const selectSeasonOptionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSeasonNumber = Number(e.currentTarget.value);
    setSeasonNum(selectedSeasonNumber);
  };

  useEffect(() => {
    getSeason(seasonNum);
  }, [seasonNum]);
  return (
    <div className={styles.main_episodes_box}>
      <div className={styles.main_option_box}>
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

      {!episodes?.length ? (
        <Loader />
      ) : (
        <div className={styles.main_table_box}>
          <table className={styles.table_box}>
            <tr className={styles.table_main_row}>
              <th className={styles.th_main_number_box}>#</th>
              <th className={styles.th_main_name_box}>Name</th>
              <th className={styles.th_main_character_img_box}>
                Featured Characters
              </th>
            </tr>
            {episodes?.map((episode) => {
              return (
                <tr key={episode.episode} className={styles.table_detail_row}>
                  <th className={styles.th_detail_number_box}>
                    {episode.episode}
                  </th>
                  <th className={styles.th_detail_name_box}>{episode.name}</th>
                  <th className={styles.th_main_character_img_box}>
                    {episode.characters.map((character) => {
                      return (
                        <div key={character.image}>
                          <img
                            src={character.image}
                            alt="character image"
                            className={styles.character_image}
                          />
                        </div>
                      );
                    })}
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default EpisodesPage;
