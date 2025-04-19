'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (!email) {
      router.push('/auth/signup');
    }
  }, [email, router]);

  const handleResendEmail = async () => {
    setIsResending(true);
    // TODO: Implement email resend logic
    // NOTE: In production, this should send an email with a verification link
    // The user should only be able to access the welcome page through that email link
    setTimeout(() => {
      setIsResending(false);
      // Temporary navigation for development purposes
      router.push('/auth/welcome');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-[400px] w-full px-4">
        <div className="text-center">
          <h1 className="text-[30px] leading-[38px] font-semibold text-[#101828] mb-3">
            Verify your email address
          </h1>
          <p className="text-[16px] leading-[24px] text-[#475467]">
            Welcome to Swap Space! We're excited to have you join us. To complete your account setup, We sent a verification message to your email:
            <br />
            <span className="text-[#101828]">{email}</span>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full bg-[#079455] text-white py-2.5 px-4 rounded-[40px] hover:bg-[#068249] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2 transition-colors text-[16px] leading-[24px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Sending...' : 'Resend email verification'}
          </button>

          <Link 
            href="/auth/signup"
            className="block text-center text-[#079455] text-[16px] leading-[24px] hover:text-[#068249]"
          >
            Edit email address
          </Link>
        </div>
      </div>
    </div>
  );
} 