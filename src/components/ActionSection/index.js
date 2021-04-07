import UploadSection from '../UploadSection';
import NeuralStyleUploadSection from '../NeuralStyleUploadSection';
import {
  ActionContainer,
  ActionWrapper,
  ActionRow,
  ActionImgColumn,
  ImgWrapper,
  Img,
  ActionTextColumn,
  ActionTextWrapper,
  Heading,
  Text,
  ErrorMessage,
  Loading
} from './styles';

export default function ActionSection({
  src,
  heading,
  description,
  uploadFile,
  setFile,
  setUrl,
  neuralStyleUrls,
  setNeuralStyleUrls,
  neuralStyleFiles,
  setNeuralStyleFiles,
  changeUploadType,
  error,
  loading
}) {
  return (
    <ActionContainer>
      <ActionWrapper>
        <ActionRow>
          <ActionImgColumn>
            <ImgWrapper $loading={loading}>
              <Img src={src} />
            </ImgWrapper>
            <Loading
              color="secondary"
              size={75}
              thickness={7}
              $loading={loading}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ActionImgColumn>
          <ActionTextColumn isNeuralStyle={heading === 'Neural Style'}>
            <ActionTextWrapper>
              <Heading>{heading}</Heading>
              <Text>{description}</Text>
              {heading === 'Neural Style' ? (
                <NeuralStyleUploadSection
                  uploadFile={uploadFile}
                  neuralStyleUrls={neuralStyleUrls}
                  setNeuralStyleUrls={setNeuralStyleUrls}
                  neuralStyleFiles={neuralStyleFiles}
                  setNeuralStyleFiles={setNeuralStyleFiles}
                  changeUploadType={changeUploadType}
                />
              ) : (
                <UploadSection
                  pageHeading={heading}
                  uploadFile={uploadFile}
                  setFile={setFile}
                  setUrl={setUrl}
                  changeUploadType={changeUploadType}
                />
              )}
            </ActionTextWrapper>
          </ActionTextColumn>
        </ActionRow>
      </ActionWrapper>
    </ActionContainer>
  );
}
