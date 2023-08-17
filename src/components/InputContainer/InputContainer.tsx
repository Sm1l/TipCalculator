import React from "react";
import { UseFormRegister, FieldErrors, RegisterOptions, UseFormResetField } from "react-hook-form";

import { InputItem } from "components/InputItem";
import { ToggleComponent } from "components/ToggleComponent";

import styles from "./InputContainer.module.scss";

import { IFormValues } from "components/MainContainer";

// export interface IFormValues {
//   bill?: number;
//   tip?: number;
//   people?: number;
// }
export interface InputContainerProps {
  // bill: number;
  // setBill: React.Dispatch<React.SetStateAction<number>>;
  // tip: number;
  // setTip: React.Dispatch<React.SetStateAction<number>>;
  // people: number;
  // setPeople: React.Dispatch<React.SetStateAction<number>>;
  // clear: boolean;
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
  rules: RegisterOptions;
  // resetField?: UseFormResetField<Pick<IFormValues, "tip">>;
  resetField?: UseFormResetField<IFormValues>;
  tip?: number;
}

const InputContainer: React.FC<InputContainerProps> = ({ errors, rules, register, resetField, tip }) => {
  return (
    <div className={styles.inputContainer}>
      <InputItem
        name="bill"
        title="bill"
        placeholder="0"
        imgItem="dollar"
        rules={{
          required: "fill the field",
          min: { value: 0, message: `Min value is 0` },
          pattern: { value: /^[1-9]\d*$/, message: "Only integer number" },
        }}
        register={register}
        errors={errors}
      />
      <ToggleComponent
        name="tip"
        placeholder="custom"
        register={register}
        errors={errors}
        resetField={resetField}
        tip={tip}
        rules={{ min: { value: 0, message: `Min value is 0` }, max: { value: 999, message: `Max value is 999` } }}
      />
      <InputItem
        name="people"
        title="number of people"
        placeholder="0"
        imgItem="people"
        register={register}
        errors={errors}
        rules={{
          required: "fill the field",
          value: 1,
          min: { value: 1, message: `Min value is 1` },
          pattern: { value: /^[1-9]\d*$/, message: "Only integer number" },
        }}
      />
    </div>
  );
};

export { InputContainer };
