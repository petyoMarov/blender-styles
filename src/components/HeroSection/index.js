import video from '../../assets/video/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroSubtitle
} from './styles';

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>{`</>`} Build with AI</HeroTitle>
        <HeroSubtitle>
          Style pictures with cutting-edge functionality of machine learning
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
}
