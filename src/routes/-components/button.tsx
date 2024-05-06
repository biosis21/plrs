import React from 'react';
import stylex, { StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '18px',
    padding: '0 22px',
    fontFamily: 'Barlow Condensed',
    borderRadius: '3px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(255, 255, 255, .25)',
    ':hover': {
      background: '#ccc',
      borderColor: '#ccc',
    },
  },
  secondary: {
    color: '#000',
    background: '#fff',
    border: '2px solid #fff',
  },
  md: {
    height: '38px',
  },
  icon: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    padding: '0 2px',
    display: 'inline-flex',
    alignItems: 'center',
    ':hover': {
      opacity: 0.6,
    },
  },
});

export type ButtonProps = {
  size?: 'md';
  variant?: 'secondary' | 'icon';
  className?: StyleXStyles;
};

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  size = 'md',
  variant = 'secondary',
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} {...stylex.props(styles.base, styles[size], styles[variant], className)}>
      {children}
    </button>
  );
};
