"use client";
import React from "react";

interface InputFieldProps {
  label: string; // Label text for the input field
  placeholder?: string; // Placeholder text for the input field
  type?: string; // Input type (e.g., text, password, email, etc.)
  value?: string; // Value for controlled input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback for handling input changes
  errorMessage?: string; // Error message to display
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } rounded-lg text-sm focus:outline-none focus:ring-2 ${
          errorMessage
            ? "focus:ring-red-500 focus:border-red-500"
            : "focus:ring-blue-500 focus:border-blue-500"
        }`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
