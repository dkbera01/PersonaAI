import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isActive = false,
  className = '',
  ...props
}) => {
  const baseStyles = "relative font-medium transition-all duration-300 shadow-lg";
  
  const variants = {
    primary: `bg-gradient-to-r from-[#00ADB5] to-[#00968c] text-white hover:shadow-xl
              hover:from-[#00c2cc] hover:to-[#00ada3]`,
    secondary: `bg-[#393E46] text-[#EEEEEE] hover:bg-[#424957]`,
    ghost: "bg-transparent text-[#EEEEEE] hover:bg-[#393E46]/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const activeStyles = isActive 
    ? "ring-2 ring-[#00ADB5] ring-offset-2 ring-offset-[#222831]" 
    : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${activeStyles} ${className} hover:scale-102 active:scale-98 transform transition-transform duration-200`}
      aria-pressed={isActive}
      role="button"
      {...props}
    >
      {children}
    </button>
  );
};
