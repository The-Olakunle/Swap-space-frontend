import Image from 'next/image';
import Link from 'next/link';

export default function AuthHeader() {
  return (
    <div className="flex justify-between items-center px-8 py-4">
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
  );
} 