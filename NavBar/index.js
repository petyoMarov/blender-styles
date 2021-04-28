import { Link as ReactRouterLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

import { GithubIconButton, Navigation, NavigationTab } from './styles';
import routes from '../../constants/routes';

export default function NavBar({ handleTabChange, tabPosition }) {
  return (
    <>
      <Navigation
        onChange={handleTabChange}
        value={tabPosition}
        textColor="secondary"
        TabIndicatorProps={{
          style: {
            height: 3
          }
        }}
      >
        {routes.map((route) => (
          <NavigationTab
            component={ReactRouterLink}
            key={route.title}
            label={route.title}
            to={route.path}
            disableRipple
          />
        ))}
      </Navigation>
      <GithubIconButton
        target="_blank"
        component="a"
        href="https://github.com/petyoMarov/blender-styles"
      >
        <GitHubIcon />
      </GithubIconButton>
    </>
  );
}
