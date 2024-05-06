import stylex from '@stylexjs/stylex';
import { Link } from '@tanstack/react-router';

const styles = stylex.create({
  base: {
    display: 'flex',
    textWrap: 'nowrap',
    overflowX: {
      default: 'scroll',
      '@media (min-width: 500px)': 'hidden',
    },
  },
  link: {
    padding: '4px 10px',
    backgroundColor: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    color: '#000',
  },
  linkActive: {
    backgroundColor: '#004E97!important',
    color: '#fff!important',
  },
});

const links = [
  {
    label: 'Polaris',
    path: '/',
  },
  {
    label: 'Off Road',
    path: '/off-road',
  },
  {
    label: 'Snow',
    path: '/snow',
  },
  {
    label: 'On Road',
    path: '/on-road',
  },
  {
    label: 'Marine',
    path: '/marine',
  },
  {
    label: 'Commercial',
    path: '/commercial',
  },
  {
    label: 'Government',
    path: '/government',
  },
];

export const Navigation = () => {
  return (
    <nav {...stylex.props(styles.base)}>
      {links.map(({ label, path }) => (
        <Link
          to={path}
          {...stylex.props(styles.link)}
          activeProps={{ ...stylex.props(styles.linkActive) }}
          activeOptions={{ exact: true }}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
