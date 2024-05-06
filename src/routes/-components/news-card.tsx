import React from 'react';
import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { Link } from '@tanstack/react-router';

const styles = stylex.create({
  base: {
    backgroundColor: '#ccc',
    display: 'block',
    textDecoration: 'none',
    padding: {
      default: '40% 0',
      '@media (min-width: 768px)': '20% 0',
    },
    position: 'relative',
    ':hover': {
      opacity: '0.6',
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
  desc: {
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
    textTransform: 'uppercase',
    marginBottom: '4px',
    fontSize: {
      default: '28px',
      '@media (min-width: 768px)': '30px',
    },
  },
});

const Desc: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p {...stylex.props(styles.desc)}>{children}</p>;
};

type TitleProps = {
  as?: 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ as = 'h3', children }) => {
  const Comp = as;
  return <Comp {...stylex.props(styles.title)}>{children}</Comp>;
};

export type NewsCardProps = {
  href: string;
  image: string;
  className?: StyleXStyles;
};

type Subcomponents = {
  Title: typeof Title;
  Desc: typeof Desc;
};

export const NewsCard: React.FC<React.PropsWithChildren<NewsCardProps>> & Subcomponents = ({
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

NewsCard.Title = Title;
NewsCard.Desc = Desc;
