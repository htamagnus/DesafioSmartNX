import React, { useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Pagination/Pagination";
import styles from "./Cards.module.scss";

export default function App() {
  const api = "https://swapi.dev/api/people/";
  const [info, setInfo] = useState([]);
  const [qtn, setQtn] = useState(1);
  const [fullList, setFullList] = useState([]);

  function handleNext() {
    if (qtn >= 9) {
      return;
    } else {
      setQtn((prev) => prev + 1);
    }
  }

  function handleDown() {
    if (qtn <= 1) {
      return;
    } else {
      setQtn((prev) => prev - 1);
    }
  }

  function getElements() {
    fetch(`${api}?page=${qtn}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response.results);
        setFullList(response.results);
      });
  }

  useEffect(() => {
    getElements();
  }, [qtn]);

  return (
    <>
      <div className={styles.cards}>
        <h1 className={styles.cards__titulo}>Buscador Star Wars</h1>
        <SearchInput info={info} setInfo={setInfo} fullList={fullList} />
        {info.length === 0 && <span>Carregando...</span>}
        {info && (
          <ul className={styles.cards__lista}>
            {info.map((starwars) => (
                <li key={starwars.created} className={styles.cards__item}>
                  <h3>{starwars.name}</h3>
                  <p>Peso: {starwars.height} </p>
                  <p>Massa: {starwars.mass} </p>
                </li>
            ))}
          </ul>
        )}
      </div>
      <Pagination handleNext={handleNext} handleDown={handleDown} />
    </>
  );
}
