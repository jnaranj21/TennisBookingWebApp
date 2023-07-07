import React, { MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler;
  buttonStyle: string;
  buttonSize: string;
}

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
