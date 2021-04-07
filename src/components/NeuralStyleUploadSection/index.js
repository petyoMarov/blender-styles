import {
  InputWrapper,
  FileUpload,
  UploadButton,
  UploadIcon,
  ToggleButton,
  ToggleIcon
} from '../UploadSection/styles';
import {
  UploadFilesWrapper,
  NeuralStyleLabel,
  NeuralStyleToggleButtonWrapper,
  UploadURLsWrapper,
  NeuralStyleURLUpload
} from './styles';

export default function NeuralStyleUploadSection({
  uploadFile,
  neuralStyleUrls,
  setNeuralStyleUrls,
  neuralStyleFiles,
  setNeuralStyleFiles,
  changeUploadType
}) {
  return (
    <InputWrapper>
      <UploadFilesWrapper>
        <NeuralStyleLabel
          htmlFor="contained-button-file-content"
          $uploadFile={uploadFile}
        >
          <FileUpload
            accept="image/*"
            id="contained-button-file-content"
            type="file"
            onChange={(e) =>
              setNeuralStyleFiles({
                ...neuralStyleFiles,
                content: e.target.files[0]
              })
            }
          />
          <UploadButton>
            <UploadIcon />
            Content
          </UploadButton>
        </NeuralStyleLabel>
        <NeuralStyleLabel
          htmlFor="contained-button-file-style"
          $uploadFile={uploadFile}
        >
          <FileUpload
            accept="image/*"
            id="contained-button-file-style"
            type="file"
            onChange={(e) =>
              setNeuralStyleFiles({
                ...neuralStyleFiles,
                style: e.target.files[0]
              })
            }
          />
          <UploadButton>
            <UploadIcon />
            Style
          </UploadButton>
        </NeuralStyleLabel>
      </UploadFilesWrapper>
      <UploadURLsWrapper>
        <NeuralStyleURLUpload
          $uploadFile={uploadFile}
          color="primary"
          variant="outlined"
          size="medium"
          label="Content url"
          onBlur={(e) =>
            setNeuralStyleUrls({ ...neuralStyleUrls, content: e.target.value })
          }
        />
        <NeuralStyleURLUpload
          $uploadFile={uploadFile}
          color="primary"
          variant="outlined"
          size="medium"
          label="Style url"
          onBlur={(e) =>
            setNeuralStyleUrls({ ...neuralStyleUrls, style: e.target.value })
          }
        />
      </UploadURLsWrapper>
      <NeuralStyleToggleButtonWrapper>
        <ToggleButton
          component="button"
          onClick={() => changeUploadType(uploadFile)}
        >
          <ToggleIcon />
          {uploadFile ? 'url upload' : 'file upload'}
        </ToggleButton>
      </NeuralStyleToggleButtonWrapper>
    </InputWrapper>
  );
}
