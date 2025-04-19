import { useState } from 'react';
import Toggle from '../ui/Toggle';
import Button from '../ui/Button';

export default function SearchFilters() {
  const [showMutualSwaps, setShowMutualSwaps] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Toggle
            checked={showMutualSwaps}
            onChange={setShowMutualSwaps}
            label="Show only mutual swaps"
          />
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[#344054] text-sm">Sort by:</span>
            <select className="text-[#667085] text-sm border-none bg-transparent focus:outline-none focus:ring-0">
              <option>Most relevant</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest first</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#344054]"
              >
                <path
                  d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Filters
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#344054]"
              >
                <path
                  d="M10 4.16667V15.8333M4.16667 10H15.8333"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Map view
          </Button>
        </div>
      </div>
    </div>
  );
} 