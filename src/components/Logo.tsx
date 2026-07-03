import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 md:h-12', // Slightly larger on desktop
    lg: 'h-12 md:h-16',
    full: 'h-full'
  } as const;

  const logoSrc = '/ST (2).png';

  return (
    <div className={`flex items-center group ${className}`}>
      <div className="h-full flex items-center"> 
        <img
          src={logoSrc}
          alt="SAGGI TECH logo"
          // Added a smooth hover scale effect (group-hover:scale-105)
          className={`${sizeClasses[size]} w-auto max-h-full select-none object-contain transition-transform duration-300 group-hover:scale-105`}
          draggable={false}
        />
      </div>
      <span className="sr-only">SAGGI TECH</span>
    </div>
  );
};

export default Logo;