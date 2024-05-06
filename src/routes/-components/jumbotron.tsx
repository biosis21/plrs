import React from 'react';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    backgroundColor: '#eee',
    padding: {
      default: '12px',
      '@media (min-width: 1200px)': '64px 70px 80px 70px',
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: '16px',
    textAlign: 'center',
    lineHeight: 1.2,
    fontSize: {
      default: '48px',
      '@media (min-width: 1200px)': '54px',
    },
  },
  content: {
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: 1.5,
  },
  primary: {
    backgroundColor: '#004e97',
    color: '#fff',
  },
  secondary: {},
});

export type JumbotronProps = {
  title: string;
  variant?: 'primary' | 'secondary';
};

export const Jumbotron: React.FC<React.PropsWithChildren<JumbotronProps>> = ({
  variant = 'secondary',
  title,
  children,
}) => {
  return (
    <div {...stylex.props(styles.base, styles[variant])}>
      <h2 {...stylex.props(styles.title)}>{title}</h2>
      <div {...stylex.props(styles.content)}>{children}</div>
    </div>
  );
};
