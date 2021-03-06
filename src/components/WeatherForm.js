/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import styles from "./weatherForm.module.css";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSumbmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSumbmit} className={styles.container}>
      <input className={styles.input} type="text" onChange={onChange} />
    </form>
  );
};

export default WeatherForm;
