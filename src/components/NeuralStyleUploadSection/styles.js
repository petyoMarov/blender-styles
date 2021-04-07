import styled from 'styled-components/macro';
import { Label, URLUpload, ToggleButtonWrapper } from '../UploadSection/styles';

export const UploadFilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NeuralStyleLabel = styled(Label)`
  :first-of-type {
    margin-bottom: 20px;

    > span {
      padding: 16px 49px 16px 14px;
    }
  }

  :nth-of-type(2) {
    > span {
      padding: 16px 79px 16px 14px;
    }
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const UploadURLsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NeuralStyleURLUpload = styled(URLUpload)`
  :first-of-type {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const NeuralStyleToggleButtonWrapper = styled(ToggleButtonWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
