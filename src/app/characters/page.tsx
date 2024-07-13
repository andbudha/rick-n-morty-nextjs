'use client';
import React, { useEffect, useState } from 'react';
import styles from './characters.module.scss';
import { APIResponse, Character } from '@/models/custom-types';
import Loader from '../loading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Characters = () => {
  const [characters, setCharacters] = useState<null | Character[]>(null);

  const getCharacters = async () => {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/?page='
    );
    const data = (await response.json()) as APIResponse;

    if (data) {
      setCharacters(data.results);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className={styles.characters_main_box}>
      {!characters && <Loader />}
      {characters?.map((character) => {
        return (
          <div key={character.id} className={styles.character_card_box}>
            <Link className={styles.read_more_link_box} href={'/characterinfo'}>
              <h4 className={styles.read_more_text}>Read More</h4>
            </Link>
            <img
              src={character.image}
              alt="character image"
              className={styles.card_image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
