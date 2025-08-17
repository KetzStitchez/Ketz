
import React from 'react';

const WaveformIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        viewBox="0 0 100 30" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        preserveAspectRatio="none"
        role="img"
        aria-hidden="true"
    >
        <path d="M 2 15 L 5 25 L 8 5 L 11 20 L 14 10 L 17 22 L 20 8 L 23 18 L 26 12 L 29 28 L 32 2 L 35 15 L 38 20 L 41 10 L 44 25 L 47 5 L 50 15 L 53 25 L 56 5 L 59 20 L 62 10 L 65 22 L 68 8 L 71 18 L 74 12 L 77 28 L 80 2 L 83 15 L 86 20 L 89 10 L 92 25 L 95 5 L 98 15" />
    </svg>
);

export default WaveformIcon;
