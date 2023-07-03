import React, { MouseEventHandler } from "react";
import "./Button.css";

interface ButtonProps {
    children: string;
    type: 'button';
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
} : ButtonProps ) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn--medium ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >{children}
    </button>
  );
};
