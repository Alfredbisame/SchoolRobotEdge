import React from 'react';
import { StatCard } from './StatCard';

interface StatsSectionProps {
  isVisible: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ isVisible }) => (
  <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
    <StatCard
      value={15}
      suffix="+"
      label="Strategic Partners"
      color="violet"
      isVisible={isVisible}
    />
    <StatCard
      value={500}
      suffix="+"
      label="Schools Protected"
      color="green"
      isVisible={isVisible}
    />
    <StatCard
      value={50}
      suffix="K+"
      label="Children Safe"
      color="violet"
      isVisible={isVisible}
    />
    <StatCard
      value={100}
      suffix="%"
      label="Success Rate"
      color="green"
      isVisible={isVisible}
    />
  </div>
);
