import React from 'react';

interface UserAvatarProps {
  src?: string;
  name: string;
  username: string;
  size?: 'sm' | 'md' | 'lg';
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ 
  src, 
  name, 
  username, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-[33px] h-[33px] text-xs',
    lg: 'w-12 h-12 text-sm'
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="flex items-center gap-2">
      {src ? (
        <img
          src={src}
          alt={name}
          className={`${sizeClasses[size]} object-contain rounded-full`}
        />
      ) : (
        <div className={`${sizeClasses[size]} bg-[rgba(24,134,254,1)] text-white font-bold flex items-center justify-center rounded-full`}>
          {getInitials(name)}
        </div>
      )}
      <div className="flex flex-col font-normal">
        <div className="text-sm text-neutral-600 leading-none">
          {name}
        </div>
        <div className="text-xs text-[#BDBDBD]">
          {username}
        </div>
      </div>
    </div>
  );
};
