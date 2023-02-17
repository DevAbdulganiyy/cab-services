import React, { HTMLAttributes, FC } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={`px-[37px] py-[17px] bg-white rounded-[60px] flex justify-center items-center ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
