import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    full: 'h-full'
  } as const;

  // Use the provided image from public folder. If you rename the file, update the path below.
  const logoSrc = '/ST (2).png';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`mr-3 h-full flex items-center`}> 
        <img
          src={logoSrc}
          alt="SAGGI TECH logo"
          className={`${sizeClasses[size]} w-auto max-h-full select-none object-contain`}
          draggable={false}
        />
      </div>
      <span className="sr-only">SAGGI TECH</span>
    </div>
  );
};

export default Logo;