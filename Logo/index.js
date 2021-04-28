import { Link as ReactRouterLink } from 'react-router-dom';
import { LogoContainer, LogoButton, LogoText } from './styles';

export default function Logo() {
  return (
    <LogoContainer>
      <LogoButton
        component={ReactRouterLink}
        disableRipple
        to="/blender-styles/"
      >
        <LogoText>{`{ BLENDER--STYLES }`}</LogoText>
      </LogoButton>
    </LogoContainer>
  );
}
