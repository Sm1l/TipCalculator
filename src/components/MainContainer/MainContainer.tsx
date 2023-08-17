import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./MainContainer.module.scss";
import { InputContainer } from "components/InputContainer";
import { ResultContainer } from "components/ResultContainer";
import { calcTotal, calcTipAmount } from "helpers/result";

export interface IFormValues {
  bill: number;
  tip: number;
  people: number;
  radio: number;
}

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tipAmount, setTimAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const {
    register,
    reset,
    watch,
    resetField,
    formState: { errors, isDirty },
  } = useForm<IFormValues>({ mode: "onBlur" });

  const handleReset = () => {
    reset();
    setTip(0); //*clear state
  };

  const watchBill = watch("bill");
  const watchTip = watch("tip");
  const watchPeople = watch("people");
  const watchRadio = watch("radio");

  //!ё почему TS не ругается?
  useEffect(() => {
    setBill(Number(watchBill));
    // console.log("bill", typeof bill);
  }, [watchBill]);

  useEffect(() => {
    if (watchTip) {
      resetField("radio");
      setTip(Number(watchTip));
    }
  }, [watchTip]);

  useEffect(() => {
    if (watchRadio) {
      resetField("tip");
      setTip(Number(watchRadio));
    }
  }, [watchRadio]);

  useEffect(() => {
    setPeople(Number(watchPeople));
  }, [watchPeople]);

  // console.log(bill, tip, people);

  useEffect(() => {
    if (bill >= 0 && tip >= 0 && tip < 1000 && people > 0 && Number.isInteger(people)) {
      setTimAmount(calcTipAmount(bill, tip, people));
      setTotal(calcTotal(bill, tip, people));
    }
  }, [bill, tip, people]);

  return (
    <main className={styles.mainContainer}>
      <form className={styles.form}>
        <div className={styles.container}>
          <InputContainer
            register={register}
            resetField={resetField}
            tip={tip}
            errors={errors}
            rules={{
              required: "The field should not be empty",
              min: { value: 1, message: "Min value is 1" },
              max: { value: 31, message: "Max value is 31" },
            }}
          />
          <ResultContainer
            setBill={setBill}
            total={total}
            tipAmount={tipAmount}
            handleReset={handleReset}
            isDirty={isDirty}
          />
        </div>
      </form>
    </main>
  );
};

export { MainContainer };
