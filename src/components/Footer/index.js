import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  SocialIcons,
  SocialIconLink
} from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>
          {`{BLENDER-STYLE}`} © {new Date().getFullYear()} - All Rights Reserved
        </FooterText>
        <SocialIcons>
          <SocialIconLink
            href="/blender-styles/"
            target="_blank"
            arial-label="Facebook"
          >
            <FacebookIcon />
          </SocialIconLink>
          <SocialIconLink
            href="/blender-styles/"
            target="_blank"
            arial-label="Instagram"
          >
            <InstagramIcon />
          </SocialIconLink>
          <SocialIconLink
            href="/blender-styles/"
            target="_blank"
            arial-label="Youtube"
          >
            <YouTubeIcon />
          </SocialIconLink>
          <SocialIconLink
            href="/blender-styles/"
            target="_blank"
            arial-label="Youtube"
          >
            <GitHubIcon />
          </SocialIconLink>
        </SocialIcons>
      </FooterWrapper>
    </FooterContainer>
  );
}
