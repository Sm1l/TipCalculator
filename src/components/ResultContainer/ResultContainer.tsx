import React from "react";

import styles from "./ResultContainer.module.scss";
import { ResultItem } from "components/ResultItem";
import { Button } from "components/Button";

interface ResultContainerProps {
  tipAmount: number;
  total: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  handleReset: React.MouseEventHandler<HTMLButtonElement>;
  isDirty: boolean;
}

const ResultContainer: React.FC<ResultContainerProps> = ({ tipAmount, total, handleReset, isDirty }) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultItems}>
        <ResultItem text="tip amount" num={tipAmount} />
        <ResultItem text="total" num={total} />
      </div>
      <Button text="reset" type="button" buttonClick={handleReset} isDirty={isDirty} />
    </div>
  );
};

export { ResultContainer };
