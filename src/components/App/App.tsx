import React from "react";

import styles from "./App.module.scss";
import { MainContainer } from "components/MainContainer";

import logo from "images/logo.svg";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header>
        <h1>
          <img src={logo} alt="logo" />
        </h1>
      </header>
      <MainContainer />
    </div>
  );
};

export { App };
