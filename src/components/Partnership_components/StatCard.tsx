import React from 'react';
import CountUp from 'react-countup';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  color: 'violet' | 'green';
  isVisible: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix,
  label,
  color,
  isVisible,
}) => {
  const textColor = color === 'violet' 
    ? 'text-violet-600 dark:text-violet-400' 
    : 'text-green-600 dark:text-green-400';

  return (
    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className={`text-3xl font-bold ${textColor} mb-2`}>
        {isVisible && (
          <CountUp
            end={value}
            suffix={suffix}
            duration={2.5}
            separator=","
            className="inline-block"
            start={0}
          />
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
};
