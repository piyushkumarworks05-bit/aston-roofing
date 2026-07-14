import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'dark' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-sans font-medium rounded-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wide';

  const variants = {
    primary: 'bg-brand-primary text-brand-light-pure hover:bg-brand-secondary active:scale-[0.98]',
    secondary: 'bg-brand-light-pure text-brand-primary border border-brand-border hover:bg-brand-light active:scale-[0.98]',
    accent: 'bg-brand-accent text-brand-light-pure hover:bg-brand-accent-hover active:scale-[0.98] shadow-sm',
    dark: 'bg-brand-secondary text-brand-light-pure hover:bg-brand-primary active:scale-[0.98]',
    outline: 'border border-brand-accent text-brand-accent hover:bg-brand-accent-light active:scale-[0.98]',
    ghost: 'text-brand-primary hover:bg-brand-border/30',
    link: 'text-brand-accent hover:text-brand-accent-hover underline underline-offset-4 p-0 font-normal hover:bg-transparent'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
    icon: 'p-2'
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
