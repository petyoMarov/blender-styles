import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const InfoContainer = styled.section`
  background: ${({ darkBg }) => (darkBg ? '#000104' : '#dfdfea')};
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'imgCol txtCol'` : `'txtCol imgCol'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'imgCol' 'txtCol'` : `'imgCol' 'txtCol'`};
  }
`;

export const InfoImgColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: imgCol;
`;

export const ImgWrappper = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const InfoTextColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: txtCol;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ darkText }) => (darkText ? '#000104' : '#dfdfea')};

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#000104' : '#dfdfea')};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const LinkButton = styled(ReactRouterLink)`
  border-radius: 50px;
  background: ${({ $primaryBtn }) => ($primaryBtn ? '#0cafff' : '#000104')};
  white-space: nowrap;
  padding: 14px 48px;
  color: ${({ $primaryBtn }) => ($primaryBtn ? '#010606' : '#dfdfea')};
  font-size: 20px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ $primaryBtn }) => ($primaryBtn ? '#dfdfea' : '#0cafff')};
  }
`;
