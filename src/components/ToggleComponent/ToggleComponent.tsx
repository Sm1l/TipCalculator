import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from "./ToggleComponent.module.scss";

import { IFormValues } from "components/InputContainer";
type tipFormType = Required<Pick<IFormValues, "tip">>;

interface ToggleComponentProps {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  clear: boolean;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ tip, setTip, clear }) => {
  const tipList: number[] = [5, 10, 15, 25, 50];
  const {
    register,
    resetField,
    watch,
    formState: { errors },
  } = useForm<tipFormType>({ mode: "onBlur" });

  //*buttons
  const [active, setActive] = useState<number>(0);
  const handleClick = (tipValue: number) => {
    if (tip !== tipValue) {
      setTip(tipValue);
      setActive(tipValue);
      resetField("tip");
    }
  };

  //*form input
  const value = watch("tip");
  useEffect(() => {
    if (value && value >= 0) {
      setTip(value);
      setActive(0);
    }
  }, [value]);

  //*clear
  useEffect(() => {
    resetField("tip"); //?лучше задать значение 1. неуправляемая формаб рассинхрон со state.
    //?button active clear?
  }, [clear]);

  return (
    <div className={styles.toggleComponent}>
      <h3 className={styles.title}>Select tip %</h3>
      <div className={styles.toggleContainer}>
        {tipList.map((tipValue: number) => {
          return (
            <button
              className={tipValue === active && !clear ? `${styles.btn} ${styles.active}` : `${styles.btn}`}
              type="button"
              key={tipValue}
              onClick={() => handleClick(tipValue)}
            >
              {tipValue}%
            </button>
          );
        })}
        <input
          type="number"
          placeholder="custom"
          className={styles.input}
          id="tip"
          min={1}
          max={1000}
          {...register("tip", {
            min: { value: 0, message: `Min value is 0` },
            max: { value: 999, message: `Max value is 999` },
          })}
        />
        <div className={styles.error}>{errors.tip && <p>{errors?.tip?.message || "error"}</p>}</div>
      </div>
    </div>
  );
};

export { ToggleComponent };
