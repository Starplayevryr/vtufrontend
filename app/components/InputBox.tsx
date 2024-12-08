import React from 'react';

interface InputFieldProps {
  label: string; // Label text for the input field
  placeholder?: string; // Placeholder text for the input field
  type?: string; // Input type (e.g., text, password, email, etc.)
  value: string; // Current value of the input field
  onChange: (value: string) => void; // Callback for handling input changes
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
