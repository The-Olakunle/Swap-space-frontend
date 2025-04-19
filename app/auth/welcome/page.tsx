'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="SwapSpace" width={135} height={32} priority />
        </Link>
      </div>

      <main className="max-w-[686px] mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-[30px] sm:text-[36px] leading-[38px] sm:leading-[44px] font-semibold text-[#121926] mb-4">
            Built for those ready to explore the world
          </h1>

          <div className="space-y-8 text-[16px] leading-[24px] text-[#475467]">
            <p>Our mission is simple: Travel can be made better and cheaper</p>

            <p>
              It all started from a question, what if travel could be more than seeing new places? 
              What if it could be about connecting with people, sharing stories and creating memories 
              without the burden of high cost?
            </p>

            <p>That's why Swap Space was born.</p>

            <p>
              We are not just a platform, we are a community of real people looking to create lasting 
              connections. Swap Space is a place where people come together to share homes, experiences, 
              and cultures. It's about building bridges, whether you're swapping with a family in a 
              bustling city or trading places with someone in the countryside.
            </p>

            <p>
              We believe that travel shouldn't be a luxury, it should be a shared experience that brings 
              people closer to the world and to each other.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <Link 
              href="/home"
              className="inline-block w-full sm:w-[360px] px-4 py-2.5 bg-[#079455] text-white rounded-[40px] hover:bg-[#068249] focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2 transition-colors text-[16px] leading-[24px] font-semibold"
            >
              Take me home
            </Link>

            <div>
              <Link 
                href="/community-guidelines"
                className="inline-block text-[14px] leading-[20px] text-[#079455] hover:text-[#068249] font-medium"
              >
                Community guidelines
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 