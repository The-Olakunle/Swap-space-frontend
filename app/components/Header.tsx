import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-[#EAECF0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="SwapSpace"
              width={135}
              height={32}
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[#475467] text-sm">Already have an account?</span>
            <Link 
              href="/auth/login" 
              className="text-[#079455] text-sm font-semibold hover:text-[#068249]"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 