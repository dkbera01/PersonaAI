import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  className = '',
  fullWidth = false,
  error = false,
  helperText = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <input
        className={`
          px-4 py-3 rounded-xl
          bg-[#393E46]/80 backdrop-blur
          text-[#EEEEEE]
          border ${error ? 'border-red-500' : 'border-[#00ADB5]/30'}
          placeholder-[#EEEEEE]/50
          focus:outline-none focus:ring-2 focus:ring-[#00ADB5]
          focus:scale-[1.01] transform
          transition-all duration-300
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        aria-invalid={error}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-400' : 'text-[#EEEEEE]/70'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};
