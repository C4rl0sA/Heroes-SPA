//POST: Devuelve el character solo si este no es igual al alter_ego

export const CharacterByHero = ({ alter_ego, characters }) => {
  //if (alter_ego === characters) return <></>;
  //return <p>{characters}</p>;

  return alter_ego === characters ? <></> : <p>{characters}</p>;
};
