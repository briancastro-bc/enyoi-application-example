import { useState, useEffect, useCallback, } from 'react';
import { get, set, del, update, } from 'idb-keyval';

import { httpGet, } from '../http/http';
import Character from './Character';

const Characters = () => {
  const [characters, setCharacters,] = useState();

  const saveAllCharactersInCache = useCallback(async (characters) => {
    await set('characters', characters);
  }, []);

  const getAllCharacters = useCallback(async () => {
    const data = await httpGet('character');

    const charactersMock = [
      {
        name: 'Paco',
        id: 1203102310,
        status: 'Death',
        species: 'Human'
      },
    ];

    const characters = data.results;

    saveAllCharactersInCache([...characters, ...charactersMock,]);
    return characters;
  }, [saveAllCharactersInCache,]);
  
  useEffect(() => {
    let isSubscribed = true;
    
    getAllCharacters()
      .then(data => {
        if (isSubscribed) {
          setCharacters(data);
        }
      })
      .catch(err => console.error(err));

    return () => isSubscribed = false;
  }, [getAllCharacters,])

  return (
    <div className='h-full py-4 px-6 overflow-scroll'>
      <h2 className='text-xl font-bold leading-7 mb-4'>
        Personajes de Rick and Morty
      </h2>
      <div className='flex flex-col gap-3'>
        {characters && characters?.length && characters?.length > 0 && characters?.map((character) => (
          <Character key={character?.id} character={character}/>
        ))}
      </div>
    </div>
  );
};

export default Characters;