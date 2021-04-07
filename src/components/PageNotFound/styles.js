import styled from 'styled-components/macro';

export const PageContainer = styled.section``;

export const PageWrapper = styled.div`
  max-width: 1280px;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 480px) {
    min-height: 600px;
  }
`;

export const ImgWrapper = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 480px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 60px;
  color: #dfdfea;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  color: #dfdfea;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
