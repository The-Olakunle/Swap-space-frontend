'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="SwapSpace" width={135} height={32} />
        </Link>
        <div className="text-sm">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-[#079455] font-semibold hover:text-[#068249]">
            Sign up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="text-center">
            <h1 className="text-[30px] font-semibold text-[#121926] mb-2">
              Welcome back to Swap Space
            </h1>
            <p className="text-[#475467]">
              Built for those ready to explore the world.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#344054]">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Janedoe@email.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-[#344054]">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-[#079455] hover:text-[#068249]"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-transparent"
                required
              />
              <div className="flex justify-end">
                <Link
                  href="/reset-password"
                  className="text-sm text-[#079455] hover:text-[#068249]"
                >
                  Reset password
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#079455] text-white py-2.5 px-4 rounded-[40px] hover:bg-[#068249] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2 transition-colors font-semibold"
            >
              Sign in
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EAECF0]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#475467]">or</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-[#D0D5DD] rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Image src="/google.svg" alt="Google" width={24} height={24} />
                <span className="text-[#344054] font-semibold">Sign in with Google</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-[#1877F2] text-white rounded-lg hover:bg-[#1869D9] transition-colors"
              >
                <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                <span className="font-semibold">Sign in with Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 