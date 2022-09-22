import { useState } from 'react';
import { Navbar, UnstyledButton, Title } from '@mantine/core';
import { useStyles } from './styling';

const mainLinksMockdata = [
  { week: 1, label: 'Home' },
  { week: 2, label: 'Dashboard' },
  { week: 3, label: 'Analytics' },
  { week: 4, label: 'Releases' },
  { week: 5, label: 'Account' },
  { week: 6, label: 'Security' },
  { week: 7, label: 'Settings' },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

export default function LessonBrowser() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const mainLinks = mainLinksMockdata.map((link) => (
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        {link.week}
      </UnstyledButton>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <Navbar height={750} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            {/* <MantineLogo type="mark" size={30} /> */}
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
