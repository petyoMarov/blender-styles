import {
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItemText
} from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link as ReactRouterLink } from 'react-router-dom';
import DrawerListItem from './styles';
import routes from '../../constants/routes';

export default function DrawerMenu({ toggleDrawer, drawerState }) {
  return (
    <Hidden mdUp>
      <IconButton onClick={toggleDrawer(true)}>
        <DehazeIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="top" open={drawerState} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routes.map((route) => (
              <DrawerListItem
                component={ReactRouterLink}
                key={route.title}
                to={route.path}
                disableRipple
              >
                <ListItemText primary={route.title} />
              </DrawerListItem>
            ))}
            <DrawerListItem
              component="a"
              href="https://github.com/petyoMarov/blender-style"
            >
              <ListItemText primary="GitHub Repo" />
            </DrawerListItem>
          </List>
        </div>
      </Drawer>
    </Hidden>
  );
}
