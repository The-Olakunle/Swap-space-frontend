import Image from 'next/image';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

export default function Avatar({
  src,
  alt = 'User avatar',
  size = 'md',
  fallback,
  className,
  ...props
}: AvatarProps) {
  const getFallbackInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  if (!src && !fallback) {
    return (
      <div
        className={clsx(
          'bg-[#F2F4F7] text-[#344054] rounded-full flex items-center justify-center font-medium',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33333C4.62609 10 3.94781 10.281 3.44771 10.781C2.94762 11.2811 2.66666 11.9594 2.66666 12.6667V14"
            stroke="#344054"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 7.33333C9.47276 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47276 2 8 2C6.52724 2 5.33334 3.19391 5.33334 4.66667C5.33334 6.13943 6.52724 7.33333 8 7.33333Z"
            stroke="#344054"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (!src && fallback) {
    return (
      <div
        className={clsx(
          'bg-[#F2F4F7] text-[#344054] rounded-full flex items-center justify-center font-medium',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {getFallbackInitials(fallback)}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'relative rounded-full overflow-hidden',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <Image
        src={src!}
        alt={alt}
        fill
        className="object-cover"
        sizes={`(max-width: 768px) ${sizeClasses[size].split(' ')[0]}, ${
          sizeClasses[size].split(' ')[0]
        }`}
      />
    </div>
  );
} 