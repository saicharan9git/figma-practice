import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
}) => {
  return (
    <div className={`w-[400px] ${className}`}>
      <label className="block h-[15px] text-[12px] font-semibold leading-[15px] text-[#374151]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-[5px] h-[44px] w-[400px] rounded-[8px] border border-[#E5E7EB] bg-[#F3F4F6] px-[14px] text-[13px] font-normal leading-[16px] text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none disabled:bg-[#E5E7EB] disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
};
