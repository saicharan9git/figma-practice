import React from 'react';

interface SocialButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-[44px] w-[192px] rounded-[8px] border border-[#E5E7EB] bg-white pl-[70px] pt-[13px] text-left text-[13px] font-medium leading-[16px] text-[#374151] transition-colors hover:bg-[#F9FAFB] ${className}`}
    >
      {label}
    </button>
  );
};
