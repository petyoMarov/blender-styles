import styled from 'styled-components/macro';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ActionContainer = styled.section`
  background: #dfdfea;
  min-height: 900px;
`;

export const ActionWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 100px 24px;
  display: grid;
  z-index: 1;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 70px 24px;
  }
`;

export const ActionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  column-gap: 100px;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'imgCol txtCol'` : `'txtCol imgCol'`};

  @media screen and (max-width: 1150px) {
    column-gap: 40px;
  }

  @media screen and (max-width: 950px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'imgCol' 'txtCol'` : `'imgCol' 'txtCol'`};
  }
`;

export const ActionImgColumn = styled.div`
  max-width: 500px;
  height: 500px;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

export const ImgWrapper = styled.div`
  padding: 15px 15px;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 0px 11px 4px rgba(0, 1, 4, 0.85);
  box-shadow: 0px 0px 11px 4px rgba(0, 1, 4, 0.85);

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $loading }) =>
      $loading
        ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)'
        : 'none'};
    z-index: 2;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Loading = styled(CircularProgress)`
  display: ${({ $loading }) => ($loading ? 'block' : 'none')};
  position: absolute;
  left: 40%;
  top: 40%;
  z-index: 3;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const ActionTextColumn = styled.div`
  padding: 0 15px;
  max-width: 500px;
  height: 500px;

  @media screen and (max-width: 480px) {
    height: ${({ isNeuralStyle }) => (isNeuralStyle ? '650px' : '550px')};
  }
`;

export const ActionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 950px) {
    align-items: center;
  }
`;

export const Heading = styled.h2`
  font-size: 48px;
  color: #000104;
  line-height: 1.1;
  font-weight: 600;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: black;
  line-height: 24px;
  flex-grow: 1;

  @media screen and (max-width: 480px) {
    padding: 0 15px;
    margin-bottom: 35px;
  }
`;
