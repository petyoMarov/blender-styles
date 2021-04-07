import {
  PageContainer,
  PageWrapper,
  ImgWrapper,
  Img,
  Title,
  Text
} from './styles';

export default function PageNotFound() {
  return (
    <PageContainer>
      <PageWrapper>
        <ImgWrapper>
          <Img src="images/404.svg" />
        </ImgWrapper>
        <Title>404</Title>
        <Text>This is not the web page you are looking for.</Text>
      </PageWrapper>
    </PageContainer>
  );
}
