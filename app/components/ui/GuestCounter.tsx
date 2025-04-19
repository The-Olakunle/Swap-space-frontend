import { Popover } from '@headlessui/react';
import clsx from 'clsx';

interface GuestCounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  label?: string;
  error?: string;
}

export default function GuestCounter({
  count,
  onIncrement,
  onDecrement,
  label,
  error,
}: GuestCounterProps) {
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
            'text-left text-[#101828]',
            'focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455]',
            error && 'border-red-300 focus:ring-red-500 focus:border-red-500'
          )}
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
              d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 10 12.5H4.16667C3.28261 12.5 2.43477 12.8512 1.80965 13.4763C1.18453 14.1014 0.833336 14.9493 0.833336 15.8333V17.5M16.6667 7.5V11.6667M18.75 9.58333H14.5833M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15907 9.16667 10 9.16667Z"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex-1">
            {count} {count === 1 ? 'guest' : 'guests'}
          </span>
        </Popover.Button>

        <Popover.Panel
          className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg p-4 border border-[#D0D5DD]"
          static
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#344054]">Guests</span>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onDecrement}
                disabled={count <= 1}
                className={clsx(
                  'w-8 h-8 flex items-center justify-center rounded-full border',
                  count <= 1
                    ? 'border-[#D0D5DD] text-[#D0D5DD] cursor-not-allowed'
                    : 'border-[#079455] text-[#079455] hover:bg-[#F0FDF4]'
                )}
              >
                -
              </button>
              <span className="text-[#344054] min-w-[20px] text-center">{count}</span>
              <button
                type="button"
                onClick={onIncrement}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[#079455] text-[#079455] hover:bg-[#F0FDF4]"
              >
                +
              </button>
            </div>
          </div>
        </Popover.Panel>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </Popover>
  );
} 