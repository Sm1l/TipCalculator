import React from "react";
import { UseFormRegister, FieldErrors, RegisterOptions } from "react-hook-form";

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
}

const InputContainer: React.FC<InputContainerProps> = ({
  // bill,
  // setBill,
  // tip,
  // setTip,
  // people,
  // setPeople,
  // clear,
  errors,
  rules,
  register,
}) => {
  return (
    <div className={styles.inputContainer}>
      <InputItem
        name="bill"
        title="bill"
        placeholder="0"
        imgItem="dollar"
        rules={{
          required: "fill the field",
          // value: 0,
          min: { value: 0, message: `Min value is 0` },
        }}
        register={register}
        errors={errors}
      />
      <ToggleComponent
        name="tip"
        placeholder="custom"
        register={register}
        errors={errors}
        rules={{ min: { value: 0, message: `Min value is 0` }, max: { value: 999, message: `Max value is 999` } }}
      />
      <InputItem
        name="people"
        title="number of people"
        placeholder="0"
        imgItem="people"
        register={register}
        errors={errors}
        rules={{ required: "fill the field", value: 1, min: { value: 1, message: `Min value is 1` } }}
      />
    </div>
  );
};

export { InputContainer };