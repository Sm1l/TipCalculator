import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string | number;
  type: "button" | "submit" | "reset" | undefined;
  buttonClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, type, buttonClick }) => {
  return (
    <button className={styles.button} type={type} onClick={buttonClick}>
      {text}
    </button>
  );
};

export { Button };
