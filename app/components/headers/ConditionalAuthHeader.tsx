'use client';

import { usePathname } from 'next/navigation';
import AuthHeader from './AuthHeader';
import LoginHeader from './LoginHeader';

export default function ConditionalAuthHeader() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/auth/login';

  return isLoginPage ? <LoginHeader /> : <AuthHeader />;
} 