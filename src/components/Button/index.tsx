import React, { MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  children: any;
  type?: "button" | "submit" | "reset";
  style?: "solid" | "dashed";
  size?: "small" | "medium" | "large";
  onClick: MouseEventHandler;
}

const Button = ({
  children,
  type = "button",
  onClick,
  size = "medium",
  style = "solid",
}: ButtonProps) => {
  return (
    <button className={`btn ${size} ${style}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
