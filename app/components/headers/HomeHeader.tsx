import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

export default function HomeHeader() {
  return (
    <header className="bg-[#F3F4F6] border-b border-[#EAECF0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="SwapSpace"
                width={135}
                height={32}
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8 ml-8">
              <Link href="/explore" className="text-[#414651] hover:text-[#079455]">
                Explore
              </Link>
              <Link href="/how-it-works" className="text-[#414651] hover:text-[#079455]">
                How it works
              </Link>
              <Link href="/about" className="text-[#414651] hover:text-[#079455]">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/list-property">
              <Button
                variant="outline"
                size="lg"
                className="hidden md:flex bg-[#F6FEF9] border-[#079455] text-[#079455] hover:bg-[#F6FEF9]"
              >
                List a property
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#079455] text-white hover:bg-[#068249]"
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 