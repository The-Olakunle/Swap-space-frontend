import { useState } from 'react';
import LocationInput from '../ui/LocationInput';
import DatePicker from '../ui/DatePicker';
import GuestCounter from '../ui/GuestCounter';
import Toggle from '../ui/Toggle';
import Button from '../ui/Button';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [showMutualSwaps, setShowMutualSwaps] = useState(false);

  const handleSearch = () => {
    // Handle search
    console.log({ location, checkIn, checkOut, guests, showMutualSwaps });
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-[1114px] mx-auto">
          <h1 className="text-[#101828] text-5xl font-bold mb-8 text-center">
            Find your perfect home swap
          </h1>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-[200px] shadow-sm border border-[#EAECF0] overflow-hidden">
              <div className="flex-1 p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#EAECF0]">
                <div className="flex flex-col">
                  <label className="text-[#344054] text-sm font-medium mb-2">Where would you like to go?</label>
                  <LocationInput
                    placeholder="Ex: 'Brighton, East Sussex'"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-[#667085] h-12"
                  />
                </div>
              </div>

              <div className="w-full md:w-[158px] p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#EAECF0]">
                <div className="flex flex-col">
                  <label className="text-[#344054] text-sm font-medium mb-2">Check in date</label>
                  <DatePicker
                    placeholder="Add check in"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    className="text-[#667085] h-12"
                  />
                </div>
              </div>

              <div className="w-full md:w-[158px] p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#EAECF0]">
                <div className="flex flex-col">
                  <label className="text-[#344054] text-sm font-medium mb-2">Check out date</label>
                  <DatePicker
                    placeholder="Add check out"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    className="text-[#667085] h-12"
                  />
                </div>
              </div>

              <div className="w-full md:w-[158px] p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#EAECF0]">
                <div className="flex flex-col">
                  <label className="text-[#344054] text-sm font-medium mb-2">Guest</label>
                  <GuestCounter
                    count={guests}
                    onIncrement={() => setGuests(prev => prev + 1)}
                    onDecrement={() => setGuests(prev => Math.max(1, prev - 1))}
                  />
                </div>
              </div>

              <div className="flex items-center p-4 md:p-6">
                <button
                  onClick={handleSearch}
                  className="h-12 w-12 flex items-center justify-center bg-[#079455] text-white rounded-full hover:bg-[#068249] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6">
              <div className="flex items-center gap-6">
                <Toggle
                  checked={showMutualSwaps}
                  onChange={setShowMutualSwaps}
                  label="Show only mutual swaps"
                />
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
                  Add more filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 