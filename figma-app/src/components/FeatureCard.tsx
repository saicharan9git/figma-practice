import React from 'react';

interface FeatureCardProps {
  title: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => {
  return (
    <div className="h-[44px] w-[280px] rounded-[8px] bg-white/10">
      <p className="pl-[16px] pt-[13px] text-[14px] font-medium leading-[17px] text-[#C7DEFE]">
        {`+ ${title}`}
      </p>
    </div>
  );
};
