import { Tabs, Tab, IconButton } from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import routes from '../../constants/routes';
import useStyles from './styles';

export default function NavBar({ handleTabChange, tabPosition }) {
  const classes = useStyles();

  return (
    <>
      <Tabs
        onChange={handleTabChange}
        value={tabPosition}
        className={classes.tabs}
        textColor="secondary"
        TabIndicatorProps={{
          style: {
            height: 3
          }
        }}
      >
        {routes.map((route) => (
          <Tab
            component={ReactRouterLink}
            key={route.title}
            label={route.title}
            to={route.path}
            disableRipple
            className={classes.tab}
          />
        ))}
      </Tabs>
      <IconButton
        component="a"
        href="https://github.com/petyoMarov/blender-style"
        className={classes.githubButton}
      >
        <GitHubIcon />
      </IconButton>
    </>
  );
}
