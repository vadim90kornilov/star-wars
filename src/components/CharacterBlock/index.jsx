import React from "react";

const CharacterBlock = ({
  name,
  height,
  mass,
  gender,
  birth_year,
  hair_color,
  skin_color,
  setModalActive,
  eye_color,
  setSelectedCharacter,
}) => {
  const onClickCharacter = () => {
    setModalActive(true);
    setSelectedCharacter({
      name,
      height,
      mass,
      gender,
      birth_year,
      hair_color,
      skin_color,
      eye_color,
    });
  };
  return (
    <div className="character-block" onClick={() => onClickCharacter()}>
      <h4 className="character-block__title">{name}</h4>
      <ul className="character-block__prop-container">
        <li className="character-block__prop-container_item">
          <div className="character-block__prop-container_item_d">{height}</div>
          <div className="character-block__prop-container_item_descr">
            height
          </div>
        </li>
        {mass !== "unknown" && (
          <li className="character-block__prop-container_item">
            <div className="character-block__prop-container_item_d">{mass}</div>
            <div className="character-block__prop-container_item_descr">
              mass
            </div>
          </li>
        )}
      </ul>
      <div className="character-block__bottom">
        <ul>
          {gender === "male" && <li className="gender-male">{gender}</li>}
          {gender === "female" && <li className="gender-female">{gender}</li>}
          {gender === "hermaphrodite" && (
            <li className="gender-hermaphrodite">{gender}</li>
          )}
          {birth_year !== "unknown" && (
            <li className="birth-year">{birth_year}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CharacterBlock;
