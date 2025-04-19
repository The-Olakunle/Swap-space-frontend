'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface PasswordValidation {
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasSpecialChar: boolean;
}

export default function CreatePasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validation, setValidation] = useState<PasswordValidation>({
    hasMinLength: true,
    hasUpperCase: true,
    hasLowerCase: true,
    hasSpecialChar: true
  });
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    if (!email) {
      router.push('/auth/signup');
    }
  }, [email, router]);

  const validatePassword = (password: string): PasswordValidation => {
    return {
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setValidation(validatePassword(value));
      if (formData.confirmPassword) {
        setPasswordsMatch(value === formData.confirmPassword);
      }
    }

    if (name === 'confirmPassword') {
      setPasswordsMatch(value === formData.password);
    }
  };

  const handleBlur = () => {
    setShowValidation(true);
  };

  const allRulesValid = Object.values(validation).every(Boolean);
  const isFormValid = allRulesValid && passwordsMatch && formData.password === formData.confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowValidation(true);
    
    if (isFormValid) {
      router.push(`/auth/signup/verify-email?email=${encodeURIComponent(email || '')}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[400px] mx-auto px-4 pt-16">
        <div className="text-center mb-8">
          <h1 className="text-[30px] leading-[38px] font-semibold text-[#101828] mb-2">
            Create password
          </h1>
          <p className="text-[16px] leading-[24px] text-[#475467]">
            Built for those ready to explore the world.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#344054] mb-1.5">
              Create password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455] text-[16px] leading-[24px] text-[#101828] ${
                  showValidation && !allRulesValid ? 'border-[#F04438]' : 'border-[#D0D5DD]'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-[#079455] hover:text-[#068249]"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#344054] mb-1.5">
              Confirm password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-[#079455] focus:border-[#079455] text-[16px] leading-[24px] text-[#101828] ${
                  showValidation && !passwordsMatch ? 'border-[#F04438]' : 'border-[#D0D5DD]'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-[#079455] hover:text-[#068249]"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {showValidation && !passwordsMatch && (
              <p className="mt-1.5 text-sm text-[#F04438]">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="space-y-2 text-[14px] leading-[20px]">
            <p className={showValidation ? (validation.hasMinLength ? 'text-[#027A48]' : 'text-[#F04438]') : 'text-[#475467]'}>
              Must contain at least 8 characters.
            </p>
            <p className={showValidation ? (validation.hasUpperCase ? 'text-[#027A48]' : 'text-[#F04438]') : 'text-[#475467]'}>
              Must contain at least one uppercase character.
            </p>
            <p className={showValidation ? (validation.hasLowerCase ? 'text-[#027A48]' : 'text-[#F04438]') : 'text-[#475467]'}>
              Must contain at least one lowercase character.
            </p>
            <p className={showValidation ? (validation.hasSpecialChar ? 'text-[#027A48]' : 'text-[#F04438]') : 'text-[#475467]'}>
              Must contain at least one special character.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#079455] text-white py-2.5 px-4 rounded-[40px] hover:bg-[#068249] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2 transition-colors text-[16px] leading-[24px] font-semibold"
          >
            Continue
          </button>
        </form>

        <div className="mt-8 text-center text-[12px] leading-[18px] text-[#475467]">
          By clicking "Continue with email" or "Sign up with Google" or "Sign up with Facebook" you agree to our{' '}
          <Link href="/terms" className="text-[#101828] underline hover:no-underline">
            Terms of use
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-[#101828] underline hover:no-underline">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
} 