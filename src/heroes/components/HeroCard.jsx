import { Link } from "react-router-dom";
import { CharacterByHero } from "../helpers";

export const HeroCard = ({
  superhero,
  alter_ego,
  characters,
  id,
  first_appearance,
  publisher,
}) => {
  const heroImage = `/assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img className="card-img" src={heroImage} alt={superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <CharacterByHero
                  characters={characters}
                  alter_ego={alter_ego}
                />
                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>Más...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
