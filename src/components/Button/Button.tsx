import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string | number;
  type: "button" | "submit" | "reset" | undefined;
  buttonClick: React.MouseEventHandler<HTMLButtonElement>;
  isDirty: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, buttonClick, isDirty }) => {
  return (
    <button className={styles.button} type={type} onClick={buttonClick} disabled={!isDirty}>
      {text}
    </button>
  );
};

export { Button };
