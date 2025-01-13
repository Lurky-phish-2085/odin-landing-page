import { ButtonHTMLAttributes } from "react";

function PrimaryButton({
  children,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white font-bold"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
