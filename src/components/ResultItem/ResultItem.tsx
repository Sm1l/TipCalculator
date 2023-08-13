import React from "react";
import CountUp from "react-countup";

import styles from "./ResultItem.module.scss";

interface ResultItemProps {
  text: string;
  num: number;
}

const ResultItem: React.FC<ResultItemProps> = ({ text, num }) => {
  return (
    <div className={styles.resultItem}>
      <div className={styles.container}>
        <h3 className={styles.text}>{text}</h3>
        <span className={styles.span}>/ person</span>
      </div>
      <div className={styles.nums}>
        <CountUp start={0} end={num} duration={0.5} prefix="₽" />
      </div>
    </div>
  );
};

export { ResultItem };
