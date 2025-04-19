'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to create password page with email
    router.push(`/auth/signup/create-password?email=${encodeURIComponent(formData.email)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-[30px] leading-[38px] font-semibold text-[#121926] mb-2">
          Welcome to Swap space
        </h1>
        <p className="text-[16px] leading-[24px] text-[#475467]">
          Built for those ready to explore the world.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#344054] mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Janedoe@email.com"
            className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455] text-[16px] leading-[24px] text-[#101828] placeholder-[#667085]"
            required
          />
        </div>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#344054] mb-1.5">
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455] text-[16px] leading-[24px] text-[#101828] placeholder-[#667085]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#079455] text-white py-2.5 px-4 rounded-[40px] hover:bg-[#068249] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2 transition-colors mt-6 text-[16px] leading-[24px] font-semibold"
        >
          Continue with email
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#EAECF0]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-[#475467]">or</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2.5 border border-[#D0D5DD] rounded-[40px] text-[#344054] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D0D5DD] text-[16px] leading-[24px] font-semibold"
        >
          <Image src="/google.svg" alt="Google" width={24} height={24} className="mr-3" />
          Sign up with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2.5 border border-[#D0D5DD] rounded-[40px] text-[#344054] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D0D5DD] text-[16px] leading-[24px] font-semibold"
        >
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="mr-3" />
          Sign up with Facebook
        </button>
      </form>

      <div className="mt-8">
        <p className="text-[12px] leading-[18px] text-[#475467] text-center">
          By clicking "Continue with email" or "Sign up with Google" or "Sign up with Facebook" you agree to our{' '}
          <Link href="/terms" className="text-[#121926] underline hover:no-underline">
            Terms of use
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-[#121926] underline hover:no-underline">
            Privacy policy
          </Link>
        </p>
      </div>
    </>
  );
} 