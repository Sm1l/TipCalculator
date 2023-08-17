import React from "react";

import styles from "./InputItem.module.scss";

import { ReactComponent as ImgDollar } from "images/icon-dollar.svg";
import { ReactComponent as ImgPerson } from "images/icon-person.svg";
import { ReactComponent as ImgRouble } from "images/icon-rouble.svg";

import { IFormValues } from "components/MainContainer";

import { InputContainerProps } from "components/InputContainer";

// type inputFormType = Required<Pick<IFormValues, "bill" | "people">>;
interface InputItemProps extends InputContainerProps {
  name: keyof IFormValues;
  title: string;
  placeholder: string;
  imgItem: "dollar" | "people";
  // min: number;
  // startValue?: number;
  // state: number;
  // setState: React.Dispatch<React.SetStateAction<number>>; ///!!!!!
  // clear: boolean;

  //!ё как передать svg в компонент?\
  // img?: string;
  // children?: React.FunctionComponent<
  //   React.SVGProps<SVGSVGElement> & {
  //     title?: string | undefined;
  //   }
  // >;
}

const InputItem: React.FC<InputItemProps> = ({ name, title, placeholder, imgItem, errors, register, rules }) => {
  // console.log(`errors?.${name}`);

  // const {
  //   register,
  //   formState: { errors },
  //   resetField,
  //   watch,
  // } = useForm<inputFormType>({ mode: "onBlur" });

  // const value: number = Number(watch(name));
  // //!!!!!!ё почему string?
  // useEffect(() => {
  //   if (value && value > 0) {
  //     setState(value);
  //   }
  // }, [value]);

  // //*clear
  // useEffect(() => {
  //   clear && resetField(`${name}`);
  // }, [clear]);

  return (
    <div className={styles.inputItem}>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        className={errors?.[`${name}`] ? `${styles.input} ${styles.inputError}` : styles.input}
        id={name}
        autoComplete="off"
        {...(register && register(name, rules))}
      />
      {imgItem === "dollar" && <ImgRouble className={styles.img} />}
      {imgItem === "people" && <ImgPerson className={styles.img} />}
      <div className={styles.error}>{errors?.[`${name}`] && <p>{errors?.[`${name}`]?.message || "error"}</p>}</div>
    </div>
  );
};

export { InputItem };
