import React from 'react';
import stylex, { StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    padding: {
      default: '16px',
      '@media (min-width: 768px)': '30px',
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: '30px',
    textTransform: 'uppercase',
  },
  noGutters: {
    padding: 0,
  },
  content: {
    display: 'flex',
    gap: {
      default: null,
      '@media (min-width: 768px)': '12px',
    },
    width: '100%',
    flexDirection: {
      default: 'column',
      '@media (min-width: 768px)': 'row',
    },
  },
  noGap: {
    gap: 0,
  },
  desc: {
    marginTop: '20px',
    fontSize: '16px',
  },
});

type DescProps = {
  className?: StyleXStyles;
};

const Desc: React.FC<React.PropsWithChildren<DescProps>> = ({ children, className, ...props }) => {
  return (
    <p {...stylex.props(styles.desc, className)} {...props}>
      {children}
    </p>
  );
};

type ContentProps = {
  noGap?: boolean;
  className?: StyleXStyles;
};

const Content: React.FC<React.PropsWithChildren<ContentProps>> = ({ noGap = false, children, className, ...props }) => {
  return (
    <div {...stylex.props(styles.content, noGap && styles.noGap, className)} {...props}>
      {children}
    </div>
  );
};

export type SectionProps = {
  title?: string;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  noGutters?: boolean;
};

type Subcomponents = {
  Content: typeof Content;
  Desc: typeof Desc;
};

export const Section: React.FC<React.PropsWithChildren<SectionProps>> & Subcomponents = ({
  title,
  noGutters = false,
  children,
  as = 'h2',
  ...props
}) => {
  const Title = as;

  return (
    <section {...props} {...stylex.props(styles.base, noGutters && styles.noGutters)}>
      {title && <Title {...stylex.props(styles.title)}>{title}</Title>}
      {children}
    </section>
  );
};

Section.Content = Content;
Section.Desc = Desc;
