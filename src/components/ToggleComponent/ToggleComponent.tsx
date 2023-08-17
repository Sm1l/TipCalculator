import React from "react";

import styles from "./ToggleComponent.module.scss";

import { InputContainerProps } from "components/InputContainer";
import { IFormValues } from "components/MainContainer";
interface ToggleComponentProps extends InputContainerProps {
  name: keyof IFormValues;
  placeholder: string;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ name, placeholder, errors, register, rules, tip }) => {
  const tipList: number[] = [5, 10, 15, 25, 50];

  return (
    <div className={styles.toggleComponent}>
      <h3 className={styles.title}>Select tip %</h3>
      <div className={styles.toggleContainer}>
        {tipList.map((tipValue: number) => {
          return (
            <div className={styles.btnContainer} key={tipValue}>
              <label
                className={tipValue === tip ? `${styles.btn} ${styles.active}` : `${styles.btn}`}
                htmlFor={tipValue.toString()}
              >
                {tipValue}%
              </label>
              <input
                className={styles.radio}
                type="radio"
                id={tipValue.toString()}
                value={tipValue}
                {...register("radio")}
              />
            </div>
          );
        })}
        <input
          type="number"
          placeholder={placeholder}
          className={errors?.[`${name}`] ? `${styles.input} ${styles.inputError}` : styles.input}
          id={name}
          {...register(name, rules)}
        />
        <div className={styles.error}>{errors?.[`${name}`] && <p>{errors?.[`${name}`]?.message || "error"}</p>}</div>
      </div>
    </div>
  );
};

export { ToggleComponent };
