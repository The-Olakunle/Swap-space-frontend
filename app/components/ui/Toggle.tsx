import { Switch } from '@headlessui/react';
import clsx from 'clsx';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export default function Toggle({ checked, onChange, label, className }: ToggleProps) {
  return (
    <div className={clsx('flex items-center gap-6', className)}>
      <Switch
        checked={checked}
        onChange={onChange}
        className={clsx(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#079455] focus:ring-offset-2',
          checked ? 'bg-[#079455]' : 'bg-[#D5D7DA]'
        )}
      >
        <span
          className={clsx(
            'inline-block h-5 w-5 transform rounded-full bg-white transition-transform',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </Switch>
      {label && (
        <span className="text-base font-medium text-[#414651]">{label}</span>
      )}
    </div>
  );
} 