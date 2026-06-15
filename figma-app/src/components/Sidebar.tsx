import React from 'react';
import { FeatureCard } from './FeatureCard';

export const Sidebar: React.FC = () => {
  const features = [
    'Real-time analytics',
    'Team collaboration',
    'Automated billing',
    'Role-based access',
  ];

  return (
    <section className="relative h-[900px] w-[680px] shrink-0 bg-[#6366F1] text-white">
      <h1 className="absolute left-[60px] top-[80px] h-[44px] w-[120px] text-[36px] font-bold leading-[44px]">
        SaaSly
      </h1>

      <h2 className="absolute left-[60px] top-[160px] h-[68px] w-[389px] text-[28px] font-semibold leading-[34px]">
        The all-in-one SaaS platform for modern teams.
      </h2>

      <p className="absolute left-[60px] top-[240px] h-[38px] w-[260px] text-[16px] font-normal leading-[19px] text-[#C7DEFE]">
        Manage projects, track analytics, and collaborate — all in one place.
      </p>

      <div className="absolute left-[60px] top-[320px] flex flex-col gap-[16px]">
        {features.map((feature) => (
          <FeatureCard key={feature} title={feature} />
        ))}
      </div>
    </section>
  );
};
