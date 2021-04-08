import {
  PageContainer,
  PageWrapper,
  ImgWrapper,
  Img,
  Title,
  Text
} from './styles';
import PageNotFoundSrc from '../../assets/images/404.svg';

export default function PageNotFound() {
  return (
    <PageContainer>
      <PageWrapper>
        <ImgWrapper>
          <Img src={PageNotFoundSrc} />
        </ImgWrapper>
        <Title>404</Title>
        <Text>This is not the web page you are looking for.</Text>
      </PageWrapper>
    </PageContainer>
  );
}
