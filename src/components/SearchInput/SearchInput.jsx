import React, { useState } from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = ({ info, setInfo, fullList }) => {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text)
    console.log(info)
    handleFilterText(info, text)
  }

  function handleFilterText (array, text) {
    const filter = array.filter((element) => element.name.toLowerCase().includes(text.toLowerCase()))
    setInfo(filter)
  }

  function handleClick() {
    setInfo(fullList)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input className={styles.input} type={"text"} name="texto" onChange={ (e) => setText( e.target.value )}/>
      <input className={styles.botao} type={"submit"} name="submit" />
    </form>
    <button className={styles.botao} onClick={handleClick}>Voltar</button>
    </>
  );
};

export default SearchInput;