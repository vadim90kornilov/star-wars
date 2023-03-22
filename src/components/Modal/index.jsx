import React from "react";
import icon_male from "../../assets/img/icon_male.png";
import icon_female from "../../assets/img/icon_female.png";
import icon_unknown from "../../assets/img/icon_unknown.png";

import "./Modal.css";
const Modal = ({
  active,
  setActive,
  name,
  height,
  mass,
  gender,
  birth_year,
  eye_color,
  hair_color,
  skin_color,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content__avatar">
          <div className="avatar_image">
            {gender === "male" && <img src={icon_male} alt="icon_male" />}
            {gender === "female" && <img src={icon_female} alt="icon_female" />}
            {gender === "hermaphrodite" && (
              <img src={icon_unknown} alt="icon_unknown" />
            )}
          </div>

          {gender === "male" && <div className="gender-male">{gender}</div>}
          {gender === "female" && <div className="gender-female">{gender}</div>}
          {gender === "hermaphrodite" && (
            <div className="gender-hermaphrodite">{gender}</div>
          )}
          <br />
          {birth_year !== "unknown" && (
            <div className="birth-year">{birth_year}</div>
          )}
        </div>
        <div className="modal__content__info">
          <div className="modal__content__info__name">{name}</div>
          <ul className="modal__content__info__descr">
            <li>Eye color: {eye_color}</li>
            <li>Hair color: {hair_color}</li>
            <li>Skin color: {skin_color}</li>
          </ul>
          <div className="modal__content__info__bottom">
            <div className="modal__content__info__bottom__item">
              <div className="modal__content__info__bottom__item__value">
                {height}
              </div>
              <br />
              <div className="modal__content__info__bottom__item_descr ">
                height
              </div>
            </div>

            {mass !== "unknown" && (
              <div className="modal__content__info__bottom__item">
                <div className="modal__content__info__bottom__item__value">
                  {mass}
                </div>
                <br />
                <div className="modal__content__info__bottom__item_descr ">
                  mass
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
