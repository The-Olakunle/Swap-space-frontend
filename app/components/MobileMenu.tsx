"use"
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                My Swaps
              </a>
              <div className="px-4 py-2">
                <Button fullWidth>Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
} 