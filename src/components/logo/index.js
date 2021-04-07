import { Link as ReactRouterLink } from 'react-router-dom';
import { LogoContainer, LogoButton, LogoText } from './styles';

export default function Logo() {
  return (
    <LogoContainer>
      <LogoButton component={ReactRouterLink} disableRipple to="/">
        <LogoText>{`{ BLENDER--STYLE }`}</LogoText>
      </LogoButton>
    </LogoContainer>
  );
}
