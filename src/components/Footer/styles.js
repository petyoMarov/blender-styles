import styled from 'styled-components/macro';

export const FooterContainer = styled.footer`
  background-color: #000104;
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 30px;
  color: #dfdfea;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #0cafff;
  font-size: 24px;

  &:hover {
    color: rgba(12, 175, 255, 0.7);
  }
`;
