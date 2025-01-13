import { ButtonHTMLAttributes } from "react";

function PrimaryButton({
  children,
  className = "",
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg bg-blue-500 text-white font-bold ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
