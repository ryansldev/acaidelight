import { ReactNode } from "react";

interface IButtonProps {
  type?: "primary" | "secondary" | "tertiary";
  htmlType?: "submit" | "button";
  children: ReactNode;
}

export default function Button({
  type = "primary",
  htmlType = "button",
  children,
}: IButtonProps) {
  return (
    <button
      type={htmlType}
      className={`${type === "primary" ? "bg-depurple-800 text-white" : "bg-degreen-500 text-black" } uppercase shadow-lg hover:scale-110 transition px-8 py-4 text-[20px] font-bold rounded-lg`}
    >
      {children}
    </button>
  )
}