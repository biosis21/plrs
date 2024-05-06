import React from 'react';
import stylex from '@stylexjs/stylex';

import { SearchIcon } from './icons';

const styles = stylex.create({
  base: {
    backgroundColor: '#fff',
    position: 'relative',
    height: '34px',
    overflow: 'hidden',
    minWidth: '290px',
    borderRadius: '3px',
    paddingLeft: '12px',
  },
  input: {
    border: 'none',
    display: 'block',
    height: '100%',
    fontSize: '16px',
    outline: 'none',
  },
  icon: {
    position: 'absolute',
    top: '6px',
    right: '6px',
  },
});

export const SearchBox: React.FC = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <input placeholder="Search" {...stylex.props(styles.input)} />
      <SearchIcon aria-hidden="true" {...stylex.props(styles.icon)} color="#004E97" />
    </div>
  );
};
