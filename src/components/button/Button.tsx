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
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button className={`rounded ${buttonClasses} ${customClasses}`}
  onClick={onClick}
>
  {text}
</button>
 );
};
