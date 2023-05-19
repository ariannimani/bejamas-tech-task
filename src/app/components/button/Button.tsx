import React from "react";
import { LoadingDots } from "@/app/components";

type ButtonProps = {
  type: "primary" | "secondary";
  onClick: () => void;
  title: string;
  className?: string;
  isLoading?: boolean;
  loadingContent?: string;
};

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  title,
  className = "",
  isLoading,
  loadingContent,
}) => {
  let buttonClasses = "";
  let textClasses = "";
  let loadingClasses = "";

  if (type === "primary") {
    buttonClasses = "bg-black text-white";
    textClasses = "text-white";
    loadingClasses = "text-white stroke-white";
  } else if (type === "secondary") {
    buttonClasses = "bg-white text-black border-[3px] border-black";
    textClasses = "text-black";
    loadingClasses = "text-black stroke-black";
  }

  return (
    <button
      className={`py-2 px-4 w-full ${buttonClasses} ${className}`}
      disabled={isLoading}
      onClick={onClick}
    >
      <span className={textClasses}>
        {isLoading && loadingContent ? (
          <LoadingDots
            className={`${loadingClasses}`}
            content={loadingContent}
          />
        ) : (
          <>{title.toUpperCase()}</>
        )}
      </span>
    </button>
  );
};

export default Button;
