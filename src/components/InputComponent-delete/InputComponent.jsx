import React from "react";
import styles from "./InputComponent.module.scss";
import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";

import { IFormValues } from "components/Form";

interface InputComponentProps {
  name: keyof IFormValues;
  placeholder: string;
  register: UseFormRegister<IFormValues>;
  rules: RegisterOptions;
  errors: FieldErrors<IFormValues>;
}

const InputComponent: React.FC<InputComponentProps> = ({ name, placeholder, register, rules, errors }) => {
  return (
    <div className={styles.inputComponent}>
      <label htmlFor={name} className={errors?.[`${name}`] ? `${styles.label} ${styles.textError}` : styles.label}>
        {name.toUpperCase()}
      </label>
      <input
        className={errors?.[`${name}`] ? `${styles.input} ${styles.inputError}` : styles.input}
        type="number"
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        {...(register && register(name, rules))}
      />
      <div className={styles.error}>{errors?.[`${name}`] && <p>{errors?.[`${name}`]?.message || "error"}</p>}</div>
    </div>
  );
};

export { InputComponent };
