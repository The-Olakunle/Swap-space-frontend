import { useState } from 'react';

interface PasswordInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function PasswordInput({ id, name, label, value, onChange, required = false }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="block text-[14px] leading-[20px] font-medium text-[#344054] mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455] text-[16px] leading-[24px] text-[#101828] pr-16"
          required={required}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-[14px] leading-[20px] font-medium text-[#079455] hover:text-[#068249] transition-colors"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
} 