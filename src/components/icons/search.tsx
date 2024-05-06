import React from 'react';

import { Icon } from './icons.type';

export const SearchIcon: React.FC<Icon> = ({ size = 24, color = '#fff', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 19 19" {...props}>
      <path
        d="M13,6.8c0,3.5-2.8,6.3-6.3,6.3c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3c0,0,0,0,0,0 C10.2,0.5,13,3.3,13,6.8z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
      ></path>
      <path d="M11.2,11.2l7.3,7.3" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};
