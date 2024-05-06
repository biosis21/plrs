import React from 'react';
import stylex, { StyleXStyles } from '@stylexjs/stylex';
import { Link } from '@tanstack/react-router';

const links = [
  {
    label: 'Vehicles',
    path: '/#',
    children: [
      {
        label: 'Off Road',
        path: '/#',
        children: [
          {
            label: 'RZR Side-by-Sides',
            path: '/#',
          },
          {
            label: 'Polaris XPEDITION Side-by-Sides',
            path: '/#',
          },
          {
            label: 'GENERAL Side-by-Sides',
            path: '/#',
          },
          {
            label: 'RANGER Utility Side-by-Sides',
            path: '/#',
          },
          {
            label: 'Sportsman ATVs',
            path: '/#',
          },
        ],
      },
      {
        label: 'Snow',
        path: '/#',
        children: [
          {
            label: 'Polaris Snowmobiles',
            path: '/#',
          },
          {
            label: 'Timbersled Snow Bikes',
            path: '/#',
          },
        ],
      },
    ],
  },
  {
    label: 'Discover',
    path: '/#',
    children: [
      {
        label: 'Off Road',
        path: '/#',
        children: [
          {
            label: 'RZR Side-by-Sides',
            path: '/#',
          },
        ],
      },
    ],
  },
  {
    label: 'Parts & Accessories',
    path: '/#',
  },
  {
    label: 'Clothing & Gear',
    path: '/#',
  },
  {
    label: 'Rentals & Membership',
    path: '/#',
  },
];

const styles = stylex.create({
  base: {
    display: 'flex',
    background: '#f9f9f9',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  link: {
    padding: '4px 10px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '28px',
    color: '#000',
    ':hover': {
      opacity: '0.6',
    },
  },
  linkActive: {
    backgroundColor: '#fff',
    borderBottom: '4px solid #004E97',
  },
  submenu: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  submenuContent: {
    padding: '30px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '40px',
  },
  category: {
    flexBasis: '20%',
  },
  categoryLabel: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#000',
    textTransform: 'uppercase',
    borderBottom: '4px solid #000',
  },
  categoryItems: {
    listStyle: 'none',
    marginTop: '20px',
  },
  categoryLink: {
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.5',
    color: '#000',
    ':hover': {
      opacity: '0.6',
    },
  },
  categoryExploreLink: {
    margin: '10px 0',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '1.5',
    color: '#004E97',
    display: 'block',
    ':hover': {
      opacity: '0.6',
    },
  },
});

type MenuProps = {
  onOpen: (open: boolean) => void;
  className?: StyleXStyles;
};

export const Menu: React.FC<MenuProps> = ({ onOpen, className, ...props }) => {
  const [active, setActive] = React.useState<number>(-1);
  const ref = React.useRef<HTMLMenuElement | null>(null);

  const handleOnClick = (index: number) => () => {
    setActive(index);
    onOpen(true);
  };

  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (active && ref.current) {
        const outsideClick = !ref.current.contains(event.target as Node);
        if (active && outsideClick) {
          onOpen(false);
          setActive(-1);
        }
      }
    };

    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <menu {...stylex.props(styles.base, className)} ref={ref} {...props}>
      {links.map(({ label, path, children }, index) => {
        return (
          <>
            <Link
              to={path}
              {...stylex.props(styles.link, index === active && styles.linkActive)}
              onClick={handleOnClick(index)}
            >
              {label}
            </Link>
            {!!children?.length && index === active && (
              <div {...stylex.props(styles.submenu)}>
                <div {...stylex.props(styles.submenuContent)}>
                  {children?.map((category) => {
                    return (
                      <div {...stylex.props(styles.category)}>
                        <div {...stylex.props(styles.categoryLabel)}>{category.label}</div>
                        <ul {...stylex.props(styles.categoryItems)}>
                          {category.children?.map((item) => {
                            return (
                              <li>
                                <Link
                                  to={item.path}
                                  {...stylex.props(styles.categoryLink)}
                                  activeOptions={{ exact: true }}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        <Link
                          to={category.path}
                          {...stylex.props(styles.categoryExploreLink)}
                          activeOptions={{ exact: true }}
                        >
                          Explore {category.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        );
      })}
    </menu>
  );
};
