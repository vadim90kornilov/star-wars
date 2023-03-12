import React from "react";

import Filter from "../components/Filter";
import Header from "../components/Header";
import CharacterBlock from "../components/CharacterBlock";
import Skeleton from "../components/CharacterBlock/Skeleton";

import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";

const Characters = () => {
  const [searchValue, setSearchValue] = useState("");

  const [items, setItems] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const [dataCount, setDataCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filterId, setFilterId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const colorEye = ["All", "brown", "red", "blue", "white"];
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

  console.log(filterId);
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          {isLoading ? (
            <h2 className="content__title">Loading...</h2>
          ) : (
            <h2 className="content__title">
              {dataCount} <span>Peoples</span> for you to choose your favorite
            </h2>
          )}
          <div className="content__top">
            <Filter value={filterId} onChangeFilter={(id) => setFilterId(id)} />
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
