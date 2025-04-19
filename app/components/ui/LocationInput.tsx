import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface LocationInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function LocationInput({
  label,
  error,
  className,
  ...props
}: LocationInputProps) {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-[#344054] mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43655 4.6967 3.03003C6.10322 1.62351 8.01088 0.833333 10 0.833333C11.9891 0.833333 13.8968 1.62351 15.3033 3.03003C16.7098 4.43655 17.5 6.34421 17.5 8.33333Z"
              stroke="#667085"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
              stroke="#667085"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          className={clsx(
            'w-full pl-10 pr-3 py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-xs',
            'text-[#101828] placeholder-[#667085]',
            'focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455]',
            error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
} 