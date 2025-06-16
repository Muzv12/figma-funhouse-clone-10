import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'onboarding';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusConfig = {
    active: {
      bg: 'bg-[#EFFEF5]',
      border: 'border-[#10A957]',
      text: 'text-[rgba(16,169,87,1)]',
      label: 'Active'
    },
    inactive: {
      bg: 'bg-[#FFF0F0]',
      border: 'border-[#FF5E5E]',
      text: 'text-[rgba(255,94,94,1)]',
      label: 'Inactive'
    },
    onboarding: {
      bg: 'bg-orange-50',
      border: 'border-[#FE9239]',
      text: 'text-[rgba(254,146,57,1)]',
      label: 'Onboarding'
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`justify-center items-center ${config.bg} flex gap-1 px-[8.315px] py-[0px] rounded-[83.149px] border-[1.039px] border-solid ${config.border}`}>
      <div className="flex w-3 shrink-0 h-3 gap-2.5" />
      <div className={`${config.text} text-xs font-normal whitespace-nowrap text-center`}>
        {config.label}
      </div>
    </div>
  );
};
