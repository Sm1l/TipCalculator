import React, { useEffect, useState } from "react";

import styles from "./MainContainer.module.scss";
import { InputContainer } from "components/InputContainer";
import { ResultContainer } from "components/ResultContainer";
import { calcTotal, calcTipAmount } from "helpers/result";

import { resetAll } from "helpers/reset";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tipAmount, setTimAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    if (bill >= 0 && tip >= 0 && tip < 1000 && people > 0) {
      setTimAmount(calcTipAmount(bill, tip, people));
      setTotal(calcTotal(bill, tip, people));
    }
  }, [bill, tip, people]);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(1);
    setClear(true);
  };
  // console.log(people);

  return (
    <main className={styles.mainContainer}>
      <InputContainer
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        tip={tip}
        setTip={setTip}
        clear={clear}
      />
      {/* <ResultContainer total={total} tipAmount={tipAmount} /> */}
      <ResultContainer setBill={setBill} total={total} tipAmount={tipAmount} handleReset={handleReset} />
    </main>
  );
};

export { MainContainer };
