'use client';
import React, { useEffect, useState } from 'react';
import styles from './characters.module.scss';
import { APIResponse, Character } from '@/models/custom-types';
import Loader from '../loading';
import Link from 'next/link';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Characters = () => {
  const [characters, setCharacters] = useState<null | Character[]>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const getCharacters = async (pageNum: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNum}`
    );
    const data = (await response.json()) as APIResponse;
    if (data) {
      setCharacters(data.results);
    }
  };

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  const setPrevPageNumHandler = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const setNextPageNumHandler = () => {
    if (currentPage < 43 && currentPage > 0) setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className={styles.characters_main_box}>
        {!characters && <Loader />}
        {characters?.map((character) => {
          return (
            <div key={character.id} className={styles.character_card_box}>
              <Link
                className={styles.read_more_link_box}
                href={`/characters/${character.id}`}
              >
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
      <div className={styles.main_button_box}>
        <button
          className={styles.button}
          onClick={setPrevPageNumHandler}
          disabled={currentPage === 1}
        >
          <GrFormPrevious className={styles.icon} />
          <span className={styles.text_span}>prev</span>{' '}
        </button>
        <button
          className={styles.button}
          onClick={setNextPageNumHandler}
          disabled={currentPage === 42}
        >
          <span className={styles.text_span}>next</span>{' '}
          <GrFormNext className={styles.icon} />
        </button>
      </div>
    </>
  );
};

export default Characters;
