import { Navbar, UnstyledButton, Title } from '@mantine/core';
import { weekDays } from './lib';
import { useStyles } from './styling';

const weekNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

// @ts-ignore
export default function LessonNav({activeDay, activeWeek, setActiveDay, setActiveWeek}) {
  const { classes, cx } = useStyles();
  const mainLinks = weekNums.map((link) => (
    <UnstyledButton
      onClick={() => setActiveWeek(link)}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: link === activeWeek })}
    >
      {link}
    </UnstyledButton>
  ));

  const links = weekDays.map((link) => (
    <a href="/"
      key={link.day}
      className={cx(classes.link, { [classes.linkActive]: activeDay === link.num })}
      onClick={(e) => {
        e.preventDefault();
        setActiveDay(link.num);
      }}
    >
      {link.day}
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
            {`Week ${activeWeek}`}
          </Title>
          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
