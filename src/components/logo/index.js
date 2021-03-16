import { Link as ReactRouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { LogoButton, LogoImg, LogoText } from './styles';
import logo from '../../logo.svg';

export default function Logo() {
  return (
    <Box>
      <LogoButton component={ReactRouterLink} disableRipple to="/">
        <LogoImg src={logo} alt="BLENDER-STYLE" />
        <LogoText>{`{ BLENDER--STYLE }`}</LogoText>
      </LogoButton>
    </Box>
  );
}
