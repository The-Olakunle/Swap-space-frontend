import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  error?: string;
  className?: string;
}

export default function DatePicker({
  label,
  placeholder = 'Add date',
  selected,
  onSelect,
  error,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative">
      <div>
        {label && (
          <label className="block text-sm font-medium text-[#344054] mb-1">
            {label}
          </label>
        )}
        <Popover.Button
          className={clsx(
            'w-full flex items-center px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg',
            'text-left text-[#101828] placeholder-[#667085]',
            'focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455]',
            error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
            className
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="mr-2 text-[#667085]"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 8.33334H2.5M13.3333 1.66667V5M6.66667 1.66667V5M5.83333 18.3333H14.1667C15.0507 18.3333 15.8986 17.9821 16.5237 17.357C17.1488 16.7319 17.5 15.884 17.5 15V6.66667C17.5 5.78261 17.1488 4.93477 16.5237 4.30965C15.8986 3.68453 15.0507 3.33334 14.1667 3.33334H5.83333C4.94928 3.33334 4.10143 3.68453 3.47631 4.30965C2.85119 4.93477 2.5 5.78261 2.5 6.66667V15C2.5 15.884 2.85119 16.7319 3.47631 17.357C4.10143 17.9821 4.94928 18.3333 5.83333 18.3333Z"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex-1">
            {selected ? format(selected, 'MMM d, yyyy') : placeholder}
          </span>
        </Popover.Button>

        <Popover.Panel
          className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-4 border border-[#D0D5DD]"
          static
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={onSelect}
            modifiers={{
              selected: selected,
            }}
            modifiersStyles={{
              selected: {
                backgroundColor: '#079455',
              },
            }}
          />
        </Popover.Panel>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </Popover>
  );
} 