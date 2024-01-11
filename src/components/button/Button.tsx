import React from "react";

export interface ButtonProps {
  text: string;
  customClasses: string;

  type?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  customClasses,
  type = "primary",
  onClick,
}) => {
  const buttonClasses =
    type === "primary"
      ? "bg-secondary-6 hover:bg-primary-5 text-white"
      : "bg-primary-8 hover:bg-grayscale-7 text-black";

  return (
    <button className={`rounded ${buttonClasses} ${customClasses}`} onClick={onClick}>
      {text}
    </button>
 );
};
