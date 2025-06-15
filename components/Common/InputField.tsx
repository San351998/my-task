"use client";

import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  height?: string; // Example: "38px"
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  height = "38px",
  className = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label htmlFor={name} className="text-xs font-medium text-[#0E253C]">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={`border border-[#e7e9ec] px-3 py-1 rounded-[12px] text-sm text-[#0E253C] outline-none placeholder:text-[#7a7a7a] ${className}`}
        style={{ height }}
        {...rest}
      />
    </div>
  );
};

export default InputField;
