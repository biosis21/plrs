import React from 'react';

import { Icon } from './icons.type';

export const MarkerIcon: React.FC<Icon> = ({ size = 26, color = '#fff', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 21.2"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      {...props}
    >
      <path
        id="ic_place_24px"
        d="M7.5,0.5c-3.9,0-7,3.1-7,7c0,5.2,7,13,7,13s7-7.8,7-13C14.5,3.6,11.4,0.5,7.5,0.5z        M7.5,10C6.1,10,5,8.9,5,7.5S6.1,5,7.5,5S10,6.1,10,7.5S8.9,10,7.5,10z"
      />
    </svg>
  );
};
