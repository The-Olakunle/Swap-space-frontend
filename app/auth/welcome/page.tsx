'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[907px] flex flex-col items-center gap-8">
        

        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-2 w-full">
            <h1 className="text-[40px] leading-[1.5] tracking-[-1.2%] font-medium text-[#121926] text-center font-inter">
              Built for those ready to explore the world
            </h1>
          </div>

          <div className="w-[567px] flex flex-col gap-6">
            <p className="text-[16px] leading-[1.5] text-[#364152] text-center font-geist">
              Our mission is simple: Travel can be made better and cheaper
            </p>

            <p className="text-[16px] leading-[1.5] text-[#364152] text-center font-geist">
              It all started from a question, what if travel could be more than seeing new places? 
              What if it could be about connecting with people, sharing stories and creating memories 
              without the burden of high cost?
            </p>

            <p className="text-[16px] leading-[1.5] text-[#364152] text-center font-geist">
              That's why Swap Space was born.
            </p>

            <p className="text-[16px] leading-[1.5] text-[#364152] text-center font-geist">
              We are not just a platform, we are a community of real people looking to create lasting 
              connections. Swap Space is a place where people come together to share homes, experiences, 
              and cultures. it's about building bridges, whether you're swapping with a family in a bustling city or trading 
              places with someone in the countryside.
            </p>

            <p className="text-[16px] leading-[1.5] text-[#364152] text-center font-geist">
              We believe that travel shouldn't be a luxury. it should be a shared experience that brings 
              people closer to the world and to each other.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-[360px] px-[18px] py-3 bg-[#079455] text-white rounded-[40px] text-[16px] leading-[1.5] font-semibold font-geist text-center">
              Take me home
            </button>

            <button className="text-[16px] leading-[1.5] text-[#079455] font-semibold font-geist text-center">
              Community guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 