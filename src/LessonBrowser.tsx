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
  const [activeWeek, setActiveWeek] = useState('Releases');
  const [activeDay, setActiveDay] = useState('Settings');

  const mainLinks = mainLinksMockdata.map((link) => (
    <UnstyledButton
      onClick={() => setActiveWeek(link.label)}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === activeWeek })}
    >
      {link.week}
    </UnstyledButton>
  ));

  const links = linksMockdata.map((link) => (
    <a href="/"
      key={link}
      className={cx(classes.link, { [classes.linkActive]: activeDay === link })}
      onClick={(e) => {
        e.preventDefault();
        setActiveDay(link);
      }}
    >
      {link}
    </a>
  ));

  return (
    <Navbar width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {activeWeek}
          </Title>
          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
