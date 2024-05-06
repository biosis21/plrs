import React from 'react';

import { Icon } from './icons.type';

export const CartIcon: React.FC<Icon> = ({ size = 30, color = '#fff', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 18a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
      <path d="M7 18a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
      <path d="M.5,3.5h2L7,18.5H17"></path>
      <path d="M6 16h13l2-5m-4-3H4"></path>
      <path d="M22 0a6 6 0 1 1-6 6 6 6 0 0 1 6-6z"></path>
    </svg>
  );
};
