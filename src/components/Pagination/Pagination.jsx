import React from "react";
import styles from "./Pagination.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ handleNext, handleDown }) => {
  return (
    <ul className={styles.paginacao}>
      <li>
        <button className={styles.paginacao__botao} onClick={handleDown}>
          <AiOutlineArrowLeft />
          Anterior
        </button>
      </li>

      <li>
        <button className={styles.paginacao__botao} onClick={handleNext}>
          Próxima
          <AiOutlineArrowRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
