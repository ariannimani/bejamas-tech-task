import React from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  onClick: () => void;
  title: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  title,
  className = "",
}) => {
  let buttonClasses = "";
  let textClasses = "";

  if (type === "primary") {
    buttonClasses = "bg-black text-white";
    textClasses = "text-white";
  } else if (type === "secondary") {
    buttonClasses = "bg-white text-black border-[3px] border-black";
    textClasses = "text-black";
  }

  return (
    <button
      className={`py-2 px-4 w-full ${buttonClasses} ${className}`}
      onClick={onClick}
    >
      <span className={textClasses}>{title.toUpperCase()}</span>
    </button>
  );
};

export default Button;
