import React, { useState, useEffect } from "react";

import styles from "./ToggleComponent.module.scss";

import { InputContainerProps } from "components/InputContainer";
import { IFormValues } from "components/MainContainer";
interface ToggleComponentProps extends InputContainerProps {
  name: keyof IFormValues;
  placeholder: string;
  // activeButton: number;
  // setActiveButton: React.Dispatch<React.SetStateAction<number>>; //!сделать конкретное
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ name, placeholder, errors, register, rules }) => {
  const tipList: number[] = [5, 10, 15, 25, 50];

  //*buttons
  //!!!!!!!!!!!!!!!!!!!отсюда начать. доделать кнопки.сброс инпута, и добавление значения в стэйт.
  const [active, setActive] = useState<number>(0);
  const handleClick = (tipValue: number) => {
    //   if (tip !== tipValue) {
    //     setTip(tipValue);
    setActive(tipValue);
    //     resetField("tip");
    //   }
  };

  // //*form input
  // const value = watch("tip");
  // useEffect(() => {
  //   if (value && value >= 0) {
  //     setTip(value);
  //     setActive(0);
  //   }
  // }, [value]);

  // //*clear
  // useEffect(() => {
  //   resetField("tip"); //?лучше задать значение 1. неуправляемая формаб рассинхрон со state.
  //   //?button active clear?
  // }, [clear]);

  return (
    <div className={styles.toggleComponent}>
      <h3 className={styles.title}>Select tip %</h3>
      <div className={styles.toggleContainer}>
        {tipList.map((tipValue: number) => {
          return (
            <button
              className={tipValue === active ? `${styles.btn} ${styles.active}` : `${styles.btn}`}
              // className={styles.btn}
              type="button"
              key={tipValue}
              onClick={() => handleClick(tipValue)}
              // {...register(tipValue)}
            >
              {tipValue}%
            </button>
          );
        })}
        <input
          type="number"
          placeholder={placeholder}
          className={errors?.[`${name}`] ? `${styles.input} ${styles.inputError}` : styles.input} //!доделать зависимость от кнопок!
          id={name}
          {...register(name, rules)}
        />
        <div className={styles.error}>{errors?.[`${name}`] && <p>{errors?.[`${name}`]?.message || "error"}</p>}</div>
      </div>
    </div>
  );
};

export { ToggleComponent };
