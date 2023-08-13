import React from "react";
// import { useForm } from "react-hook-form";

import { InputItem } from "components/InputItem";
import { ToggleComponent } from "components/ToggleComponent";

import styles from "./InputContainer.module.scss";

export interface IFormValues {
  bill?: number;
  tip?: number;
  people?: number;
}
interface InputContainerProps {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
  clear: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({ bill, setBill, tip, setTip, people, setPeople, clear }) => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   watch,
  //   reset,
  // } = useForm<IFormValues>({ mode: "onBlur" });

  //*-----

  // const onSubmit = handleSubmit((data) => {
  //   console.log("handleSubmit", data);
  //   data.bill && console.log("bill", data.bill);
  //   data.people && console.log("people", data.people);
  //   data.tip && console.log("tip", data.tip);
  // data.bill && setBill(data.bill);
  // console.log(bill);

  // setBYear(data.year);
  // setBMonth(data.month);
  // setBDay(data.day);
  // reset();
  // });

  //*-----

  return (
    // <form className={styles.form}>
    <div className={styles.inputContainer}>
      {/* //*------------ */}
      {/* <div className={styles.inputItem}>
          <label className={styles.label} htmlFor="bill">
            bill
          </label>
          <input
            type="number"
            placeholder={"0"}
            className={errors.bill || errors.people ? `${styles.input} ${styles.inputError}` : styles.input}
            id="bill"
            autoComplete="off"
            value={bill}
            // onChange={(e) => setBill(Number(e.target.value))}
            {...register("bill", {
              required: "fill the field",
              min: { value: 0, message: `Min value is 0` },
            })}
          />
          {<ImgDollar className={styles.img} />}
          <div className={styles.error}>{errors.bill && <p>{errors?.bill?.message || "error"}</p>}</div>
        </div> */}
      {/* //*------------ */}
      <InputItem
        name="bill"
        title="bill"
        placeholder="0"
        imgItem="dollar"
        min={0}
        state={bill}
        setState={setBill}
        clear={clear}
      />
      <ToggleComponent tip={tip} setTip={setTip} clear={clear} />
      <InputItem
        name="people"
        title="number of people"
        placeholder="0"
        imgItem="people"
        min={1}
        startValue={1}
        state={people}
        setState={setPeople}
        clear={clear}
      />
    </div>
    // </form>
  );
};

export { InputContainer };
