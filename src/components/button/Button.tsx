import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

let default_style =
  "bg-teal-700 text-white font-[Poppins] py-2 px-6 rounded-full hover:bg-teal-900 duration-500  whitespace-nowrap text uppercase";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${default_style} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
