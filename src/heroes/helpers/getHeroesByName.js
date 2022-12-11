import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter(
    (heroe) =>
      //   heroe.superhero.toLocaleLowerCase() === name;
      heroe.superhero.toLocaleLowerCase().includes(name) // includes busca una coincidencia de lo que haya escrito
  );
};
