import React, { useRef } from "react";

import Filter from "../components/Filter";
import Header from "../components/Header";
import CharacterBlock from "../components/CharacterBlock";
import Skeleton from "../components/CharacterBlock/Skeleton";

import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import axios from "axios";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setFilterId } from "../redux/slices/filterSlice";

const Characters = () => {
  const filterId = useSelector((state) => state.filter.filterId);
  const dispath = useDispatch();
  console.log(filterId);
  const onChangeFilter = (id) => {
    dispath(setFilterId(id));
  };
  console.log("id filter:", filterId);

  const [searchValue, setSearchValue] = useState("");

  const [items, setItems] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [dataCount, setDataCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const colorEye = ["All", "brown", "red", "blue", "white"];
  //wookie lng
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    setIsLoading(true);

    const getCharacters = async () => {
      try {
        const { data } = await axios.get(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );
        setItems(data.results);

        setDataCount(data.count);
        window.scrollTo(0, 0);
      } catch (error) {
        alert("Webpage Not Available");
        console.log("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCharacters();
  }, [currentPage]);

  const characters = items
    .filter((character) => {
      if (filterId === 0) {
        return true;
      }
      if (
        character.eye_color
          .toLowerCase()
          .includes(colorEye[filterId].toLowerCase())
      ) {
        return true;
      }

      return false;
    })
    .map((item) => (
      <CharacterBlock
        key={item.url}
        {...item}
        setModalActive={setModalActive}
        setSelectedCharacter={setSelectedCharacter}
      />
    ));

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          {isLoading ? (
            <h2 className="content__title">Loading...</h2>
          ) : (
            <h2 className="content__title">
              {dataCount} <span>{t("Peoples")}</span>{" "}
              {t("for you to choose your favorite")}
            </h2>
          )}
          <div className="content__top">
            <Filter value={filterId} onChangeFilter={onChangeFilter} />
            <div>
              Language:
              <button
                className="content__top__btn"
                onClick={() => changeLanguage("en")}
              >
                En
              </button>
              <button
                className="content__top__btn"
                onClick={() => changeLanguage("wookie")}
              >
                Wookie
              </button>
            </div>
          </div>

          {/* {items.length && (
            <h2 className="content__title">
              {items.length} Peoples for you to choose your favorite
            </h2>
          )} */}
          <div className="content__items">
            {isLoading
              ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
              : characters}
          </div>
          {/* <Pagination
            characterPerPage={characterPerPage}
            totalCharacter={dataCount}
            setCurrentPage={setCurrentPage}
          /> */}
          <Pagination
            dataCount={dataCount}
            onChangePage={(number) => setCurrentPage(number)}
          />
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        {...selectedCharacter}
      />
    </>
  );
};

export default Characters;
