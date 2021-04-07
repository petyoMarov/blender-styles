import styled from 'styled-components/macro';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AutorenewIcon from '@material-ui/icons/Autorenew';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  display: ${({ $uploadFile }) => ($uploadFile ? 'flex' : 'none')};
  justify-content: flex-start;
  max-width: 170px;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const FileUpload = styled.input`
  display: none;
`;

export const UploadIcon = styled(CloudUploadIcon)`
  font-size: 25px;
  margin-right: 8px;
`;

export const UploadButton = styled.span`
  border-radius: 10px;
  width: 100%;
  background: #0cafff;
  white-space: nowrap;
  padding: 13.5px 66px 13.5px 14px;
  color: #000104;
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
    background: #000104;
    color: #dfdfea;
  }
`;

export const URLUpload = styled(TextField)`
  display: ${({ $uploadFile }) => ($uploadFile ? 'none' : 'inline-flex')};
  max-width: 170px;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 20px;

  > div {
    border-radius: 10px;
    height: 60px;
    font-family: 'Ubuntu', 'Open Sans', 'sans-serif';
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const ToggleButtonWrapper = styled.div`
  max-width: 170px;
`;

export const ToggleButton = styled(UploadButton)`
  padding: 14px 40px 14px 14px;
  width: 100%;
  border: 2px solid #0cafff;
  color: #000104;
  background: #dfdfea;

  &:hover {
    background: #000104;
    color: #dfdfea;
    border-color: #000104;
  }
`;

export const ToggleIcon = styled(AutorenewIcon)`
  font-size: 20px;
  margin-right: 8px;
`;
