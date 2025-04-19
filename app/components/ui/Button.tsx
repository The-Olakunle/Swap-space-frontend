import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-semibold transition-colors rounded-full',
        {
          // Variants
          'bg-[#079455] text-white hover:bg-[#068249] focus:ring-[#079455]': variant === 'primary',
          'bg-white text-[#344054] border border-[#D0D5DD] hover:bg-gray-50': variant === 'secondary',
          'border border-[#D0D5DD] bg-transparent hover:bg-gray-50': variant === 'outline',
          'bg-transparent hover:bg-gray-50': variant === 'ghost',
          
          // Sizes
          'text-sm px-3 py-1.5': size === 'sm',
          'text-base px-4 py-2.5': size === 'md',
          'text-lg px-6 py-3': size === 'lg',
          
          // Width
          'w-full': fullWidth,
        },
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
} 