import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: 'white' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
}

export default function IconButton({
  icon,
  variant = 'white',
  size = 'md',
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full transition-colors',
        {
          'bg-white shadow-sm hover:bg-gray-50': variant === 'white',
          'bg-transparent hover:bg-black/5': variant === 'transparent',
          
          // Sizes
          'p-1.5': size === 'sm',
          'p-2': size === 'md',
          'p-2.5': size === 'lg',
        },
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#079455]',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
} 