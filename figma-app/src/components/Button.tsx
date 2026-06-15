import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-[40px] w-[400px] rounded-[8px] bg-[#6366F1] pl-[14px] pt-[12px] text-left text-[13px] font-semibold leading-[16px] text-white transition-colors hover:bg-[#5558E8] ${className}`}
    >
      {children}
    </button>
  );
};
