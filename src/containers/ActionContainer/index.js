import { useState } from 'react';
import { ActionSection } from '../../components';

export default function ActionContainer({
  src,
  heading,
  desctiption,
  resultUrl,
  setFile,
  setUrl,
  neuralStyleUrls,
  setNeuralStyleUrls,
  neuralStyleFiles,
  setNeuralStyleFiles,
  error,
  loading
}) {
  const [uploadFile, setUploadFile] = useState(true);

  const changeUploadType = (currentType) => {
    setUploadFile(!currentType);
  };

  return (
    <ActionSection
      src={resultUrl || src}
      heading={heading}
      description={desctiption}
      uploadFile={uploadFile}
      setFile={setFile}
      setUrl={setUrl}
      neuralStyleUrls={neuralStyleUrls}
      setNeuralStyleUrls={setNeuralStyleUrls}
      neuralStyleFiles={neuralStyleFiles}
      setNeuralStyleFiles={setNeuralStyleFiles}
      changeUploadType={changeUploadType}
      error={error}
      loading={loading}
    />
  );
}
