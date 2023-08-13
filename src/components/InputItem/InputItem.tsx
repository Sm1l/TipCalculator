import React, { useEffect } from "react";

import styles from "./InputItem.module.scss";
import { useForm } from "react-hook-form";

import { ReactComponent as ImgDollar } from "images/icon-dollar.svg";
import { ReactComponent as ImgPerson } from "images/icon-person.svg";

import { IFormValues } from "components/InputContainer";

type inputFormType = Required<Pick<IFormValues, "bill" | "people">>;

interface InputItemProps {
  name: "bill" | "people";
  title: string;
  placeholder: string;
  imgItem: "dollar" | "people";
  min: number;
  startValue?: number;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>; ///!!!!!
  clear: boolean;

  //!ё как передать svg в компонент?\
  // img?: string;
  // children?: React.FunctionComponent<
  //   React.SVGProps<SVGSVGElement> & {
  //     title?: string | undefined;
  //   }
  // >;
}

const InputItem: React.FC<InputItemProps> = ({
  name,
  title,
  placeholder,
  imgItem,
  min,
  startValue,
  state,
  setState,
  clear,
}) => {
  // console.log(`errors?.${name}`);

  const {
    register,
    formState: { errors },
    resetField,
    watch,
  } = useForm<inputFormType>({ mode: "onBlur" });

  const value: number = Number(watch(name));
  // console.log("name", typeof name);
  //!!!!!!ё почему string?
  useEffect(() => {
    if (value && value > 0) {
      setState(value);
    }
  }, [value]);
  // console.log(name, state);

  //*----test
  // useEffect(() => {
  //   const subscr = watch((data) => {
  //     console.log("data", data);
  //   });

  //   return () => {
  //     subscr.unsubscribe();
  //   };
  // }, [watch]);
  //*----

  //*clear
  useEffect(() => {
    clear && resetField(`${name}`);
  }, [clear]);

  return (
    <div className={styles.inputItem}>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        className={errors.bill || errors.people ? `${styles.input} ${styles.inputError}` : styles.input}
        id={name}
        autoComplete="off"
        // value={state}
        // onChange={(e) => setState(e.target.value)}
        {...register(`${name}`, {
          required: "fill the field",
          value: startValue,
          min: { value: min, message: `Min value is ${min}` },
          // max: { value: 12, message: "Max value is 12" },
        })}
      />
      {/* {children} */}
      {/* <div className={styles.img}>{children}</div> */}
      {/* <img className={styles.img} src={img} alt="logo" /> */}
      {/* <img className={styles.img} src={Img} alt="logo" /> */}
      {/* <Image className={styles.img} /> */}
      {imgItem === "dollar" && <ImgDollar className={styles.img} />}
      {imgItem === "people" && <ImgPerson className={styles.img} />}
      <div className={styles.error}>{errors.bill && <p>{errors?.bill?.message || "error"}</p>}</div>
      <div className={styles.error}>{errors.people && <p>{errors?.people?.message || "error"}</p>}</div>
      {/* <div className={styles.error}>{errors.`${name}` && <p>{errors?.`${name}`?.message || "error"}</p>}</div> */}
      {/* //!ё дублирование */}
    </div>
  );
};

export { InputItem };
