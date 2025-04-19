import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';

export default function HomeHeader() {
  return (
    <header className="border-b border-[#EAECF0] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="SwapSpace"
              width={135}
              height={32}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/explore" className="text-[#344054] hover:text-[#079455]">
              Explore
            </Link>
            <Link href="/how-it-works" className="text-[#344054] hover:text-[#079455]">
              How it works
            </Link>
            <Link href="/about" className="text-[#344054] hover:text-[#079455]">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/list-property">
              <Button variant="outline" size="sm" className="hidden md:flex">
                List a property
              </Button>
            </Link>

            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-full">
                <Avatar size="sm" />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#667085"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#EAECF0] py-1 focus:outline-none z-50">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } block px-4 py-2 text-sm text-[#344054]`}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/settings"
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } block px-4 py-2 text-sm text-[#344054]`}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } block w-full text-left px-4 py-2 text-sm text-[#344054]`}
                      onClick={() => {/* Handle logout */}}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
} 