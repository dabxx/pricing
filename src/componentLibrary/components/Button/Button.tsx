import React, { ReactNode } from "react";
import "./button.css";
import { Spinner } from "@chakra-ui/react";
import clsx from "clsx";

interface ButtonProps {
  children?: ReactNode;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  context?:
    | "primary"
    | "secondary"
    | "text"
    | "outlined"
    | "outlinedSecondary"
    | "textSecondary";
  className?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  prefixIcon,
  suffixIcon,
  children,
  disabled = false,
  isLoading = false,
  context = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx("oui-button", `oui-button--${context} ${isLoading && "oui-button--loading"}`, className)}
      disabled={disabled}
      {...props}
    >
      {prefixIcon}
      <span>{children}</span>
      {suffixIcon}
      {isLoading && (
        <div aria-label="Loading" className="oui-button__spinner"><Spinner /></div>
      )}
    </button>
  );
};

export default Button;
