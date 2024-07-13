import React from 'react';
import styles from './characterinfo.module.scss';
import { Character } from '@/models/custom-types';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Link from 'next/link';

const characterinfo = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/2');
  const character: Character = await response.json();
  console.log('Character Info Page: ', character);

  return (
    <div className={styles.info_main_box}>
      <div className={styles.main_character_info_box}>
        <div className={styles.character_image_box}>
          <img
            src={character.image}
            className={styles.character_image}
            alt="character image"
          />
        </div>
        <div className={styles.character_info_box}>
          <h2>{character.name}</h2>
          <h3>
            Gender:{' '}
            <span className={styles.character_info_span}>
              {character.gender}
            </span>{' '}
          </h3>
          <h3>
            Species:{' '}
            <span className={styles.character_info_span}>
              {character.species}
            </span>{' '}
          </h3>
          <h3>
            Status:{' '}
            <span className={styles.character_info_span}>
              {character.status}
            </span>{' '}
          </h3>
          <h3>
            Origin:{' '}
            <span className={styles.character_info_span}>
              {character.origin.name}
            </span>{' '}
          </h3>
          <p className={styles.character_info_span}>
            Appers in{' '}
            <span className={styles.num_of_episodes}>
              {character.episode.length}
            </span>{' '}
            episodes.
          </p>
        </div>
      </div>
      <div className={styles.main_button_box}>
        <Link className={styles.button} href={'/characters'}>
          <span className={styles.text_span}>characters</span>{' '}
          <GrFormPrevious className={styles.icon} />
        </Link>
        <div className={styles.button}>
          <span className={styles.text_span}>next</span>{' '}
          <GrFormNext className={styles.icon} />
        </div>
        <div className={styles.button}>
          <span className={styles.text_span}>prev</span>{' '}
          <GrFormPrevious className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default characterinfo;
