import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoImgColumn,
  ImgWrappper,
  Img,
  InfoTextColumn,
  TextWrapper,
  Title,
  Subtitle,
  BtnWrapper,
  LinkButton
} from './styles';

export default function InfoSection({
  path,
  darkBg,
  imgStart,
  src,
  alt,
  darkText,
  title,
  subtitle,
  primaryBtn
}) {
  return (
    <InfoContainer darkBg={darkBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <InfoImgColumn>
            <ImgWrappper>
              <Img src={src} alt={alt} />
            </ImgWrappper>
          </InfoImgColumn>
          <InfoTextColumn>
            <TextWrapper>
              <Title darkText={darkText}>{title}</Title>
              <Subtitle darkText={darkText}>{subtitle}</Subtitle>
              <BtnWrapper>
                <LinkButton to={path} $primaryBtn={primaryBtn}>
                  Try Now
                </LinkButton>
              </BtnWrapper>
            </TextWrapper>
          </InfoTextColumn>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
