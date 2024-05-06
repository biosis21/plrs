import React from 'react';
import stylex from '@stylexjs/stylex';

import { CartIcon, MarkerIcon, MenuIcon, UserIcon } from '../../components/icons';
import { SearchBox } from '../../components/search-box';
import { Button } from './button';
import { Menu } from './menu';
import { Navigation } from './navigation';

const styles = stylex.create({
  base: {
    display: 'block',
    background: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    borderBottom: '1px solid #888',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#004E97',
    height: '40px',
    padding: '2px 6px',
  },
  menuButton: {
    display: {
      default: 'block',
      '@media (min-width: 1200px)': 'none',
    },
  },
  menu: {
    display: {
      default: 'none',
      '@media (min-width: 1200px)': 'flex',
    },
  },
  logo: {
    maxHeight: '30px',
  },
  logoImg: {
    display: 'block',
  },
  searchBox: {
    display: {
      default: 'none',
      '@media (min-width: 1200px)': 'block',
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.8,
    zIndex: 9,
  },
});

export const Header = () => {
  const [visibleBackdrop, setBackdropVisibility] = React.useState(false);

  return (
    <>
      <header {...stylex.props(styles.base)}>
        <Navigation />
        <div {...stylex.props(styles.container)}>
          <div {...stylex.props(styles.menuButton)}>
            <Button variant="icon">
              <MenuIcon aria-hidden="true" />
            </Button>
          </div>
          <div {...stylex.props(styles.logo)}>
            <img
              {...stylex.props(styles.logoImg)}
              src="https://cdn1.polaris.com/globalassets/crp/2024/nav-bar-logos/nav-bar-logo-polaris.svg?v=c0e00521"
              alt="logo"
            />
          </div>
          <div {...stylex.props(styles.searchBox)}>
            <SearchBox />
          </div>
          <div {...stylex.props(styles.actions)}>
            <Button variant="icon">
              <MarkerIcon aria-hidden="true" />
            </Button>
            <Button variant="icon">
              <UserIcon aria-hidden="true" />
            </Button>
            <Button variant="icon">
              <CartIcon aria-hidden="true" />
            </Button>
          </div>
        </div>
        <Menu onOpen={setBackdropVisibility} className={styles.menu} />
      </header>
      {visibleBackdrop && <div {...stylex.props(styles.backdrop)}></div>}
    </>
  );
};
