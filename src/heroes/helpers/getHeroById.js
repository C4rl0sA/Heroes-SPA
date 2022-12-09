//POST: Devuelve un la info de un Heroe capturando el id por el params

import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
