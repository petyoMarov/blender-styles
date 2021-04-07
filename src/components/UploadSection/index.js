import {
  InputWrapper,
  Label,
  FileUpload,
  UploadButton,
  UploadIcon,
  URLUpload,
  ToggleButtonWrapper,
  ToggleButton,
  ToggleIcon
} from './styles';

export default function UploadSection({
  uploadFile,
  setFile,
  setUrl,
  changeUploadType
}) {
  return (
    <InputWrapper>
      <Label htmlFor="contained-button-file" $uploadFile={uploadFile}>
        <FileUpload
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <UploadButton>
          <UploadIcon />
          Image
        </UploadButton>
      </Label>
      <URLUpload
        $uploadFile={uploadFile}
        color="primary"
        variant="outlined"
        size="medium"
        label="Image url"
        onBlur={(e) => setUrl(e.target.value)}
      />
      <ToggleButtonWrapper>
        <ToggleButton
          component="button"
          onClick={() => changeUploadType(uploadFile)}
        >
          <ToggleIcon />
          {uploadFile ? 'url upload' : 'file upload'}
        </ToggleButton>
      </ToggleButtonWrapper>
    </InputWrapper>
  );
}
