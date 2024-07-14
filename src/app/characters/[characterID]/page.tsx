'use client';
import React, { useEffect, useState } from 'react';
import styles from './characterinfopage.module.scss';
import { Character } from '@/models/custom-types';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Link from 'next/link';
import Loader from '../../loading';
import { useParams } from 'next/navigation';

const CharacterInfoPage = () => {
  const { characterID } = useParams();
  const [character, setCharacter] = useState<null | Character>(null);
  const [curentCharacterID, setCurrentCharacterID] = useState<number>(
    Number(characterID)
  );

  const getCharacter = async (id: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const result = await response.json();
    if (result) {
      setCharacter(result);
    }
  };

  const increaseCurrentCharacterIdHandler = () => {
    setCurrentCharacterID(curentCharacterID + 1);
  };
  const decreaseCurrentCharacterIdHandler = () => {
    setCurrentCharacterID(curentCharacterID - 1);
  };
  useEffect(() => {
    getCharacter(curentCharacterID);
  }, [curentCharacterID]);
  return (
    <div className={styles.info_main_box}>
      <>
        {' '}
        <div className={styles.main_character_info_box}>
          <div className={styles.character_image_box}>
            {!character ? (
              <Loader />
            ) : (
              <img
                src={character?.image}
                className={styles.character_image}
                alt="character image"
              />
            )}
          </div>
          <div className={styles.character_info_box}>
            {!character ? (
              <Loader />
            ) : (
              <>
                <h3>
                  Name:{' '}
                  <span className={styles.character_info_span}>
                    {character?.name}
                  </span>{' '}
                </h3>
                <h3>
                  Gender:{' '}
                  <span className={styles.character_info_span}>
                    {character?.gender}
                  </span>{' '}
                </h3>
                <h3>
                  Species:{' '}
                  <span className={styles.character_info_span}>
                    {character?.species}
                  </span>{' '}
                </h3>
                <h3>
                  Status:{' '}
                  <span className={styles.character_info_span}>
                    {character?.status}
                  </span>{' '}
                </h3>
                <h3>
                  Origin:{' '}
                  <span className={styles.character_info_span}>
                    {character?.origin.name}
                  </span>{' '}
                </h3>
                <p className={styles.character_info_span}>
                  Appers in{' '}
                  <span className={styles.num_of_episodes}>
                    {character?.episode.length}
                  </span>{' '}
                  episodes.
                </p>
              </>
            )}
          </div>
        </div>
      </>
      <div className={styles.main_button_box}>
        <Link className={styles.button} href={'/characters'}>
          <span className={styles.text_span}>back to list</span>{' '}
          <GrFormPrevious className={styles.icon} />
        </Link>
        <button
          className={styles.button}
          onClick={decreaseCurrentCharacterIdHandler}
          disabled={curentCharacterID === 1}
        >
          <GrFormPrevious className={styles.icon} />
          <span className={styles.text_span}>prev</span>{' '}
        </button>
        <button
          className={styles.button}
          onClick={increaseCurrentCharacterIdHandler}
          disabled={curentCharacterID === 826}
        >
          <span className={styles.text_span}>next</span>{' '}
          <GrFormNext className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default CharacterInfoPage;
