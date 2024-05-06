import React from 'react';
import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { Link } from '@tanstack/react-router';

const styles = stylex.create({
  base: {
    backgroundColor: '#ccc',
    display: 'block',
    textDecoration: 'none',
    position: 'relative',
    ':hover': {
      opacity: '0.6',
    },
    padding: {
      default: '40% 0',
      '@media (min-width: 768px)': '20% 0',
    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: {
      default: '16px',
      '@media (min-width: 768px)': '30px',
    },
  },
  image: (url) => ({
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
  }),
  category: {
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1.2,
    fontSize: '20px',
    textTransform: 'uppercase',
  },
  title: {
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1.2,
    fontSize: '30px',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
});

const Category: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  return (
    <p {...stylex.props(styles.category)} {...props}>
      {children}
    </p>
  );
};

type TitleProps = {
  as?: 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ as = 'h3', children, ...props }) => {
  const Comp = as;
  return (
    <Comp {...stylex.props(styles.title)} {...props}>
      {children}
    </Comp>
  );
};

export type NewsCardProps = {
  href: string;
  image: string;
  className?: StyleXStyles;
};

type Subcomponents = {
  Title: typeof Title;
  Category: typeof Category;
};

export const AboutCard: React.FC<React.PropsWithChildren<NewsCardProps>> & Subcomponents = ({
  href,
  children,
  image,
  className,
  ...props
}) => {
  return (
    <Link href={href} {...stylex.props(styles.base, className, styles.image(image))} {...props}>
      <div {...stylex.props(styles.content)}>{children}</div>
    </Link>
  );
};

AboutCard.Title = Title;
AboutCard.Category = Category;
