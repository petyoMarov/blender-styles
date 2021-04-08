import { useEffect, useState } from 'react';
import { ActionSection } from '../../components';
import {
  handleUrlUpload,
  handleFileUpload,
  handleNeuralStyleUrlUpload,
  handleNeuralStyleFileUpload
} from '../../services/deepai';

export default function ActionContainer({ apiId, src, heading, desctiption }) {
  const [uploadFile, setUploadFile] = useState(true);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [neuralStyleFiles, setNeuralStyleFiles] = useState({
    content: null,
    style: null
  });
  const [neuralStyleUrls, setNeuralStyleUrls] = useState({
    content: null,
    style: null
  });

  const changeUploadType = (currentType) => {
    setUploadFile(!currentType);
  };

  useEffect(() => {
    if (apiId !== 'fast-style-transfer') {
      handleUrlUpload(apiId, imgUrl, setResultUrl, setError, setLoading);
    }
  }, [apiId, imgUrl]);

  useEffect(() => {
    if (apiId !== 'fast-style-transfer') {
      handleFileUpload(apiId, file, setResultUrl, setError, setLoading);
    }
  }, [apiId, file]);

  useEffect(() => {
    if (apiId === 'fast-style-transfer') {
      handleNeuralStyleUrlUpload(
        apiId,
        neuralStyleUrls,
        setResultUrl,
        setError,
        setLoading
      );
    }
  }, [apiId, neuralStyleUrls, neuralStyleUrls.content, neuralStyleUrls.style]);

  useEffect(() => {
    if (apiId === 'fast-style-transfer') {
      handleNeuralStyleFileUpload(
        apiId,
        neuralStyleFiles,
        setResultUrl,
        setError,
        setLoading
      );
    }
  }, [
    apiId,
    neuralStyleFiles,
    neuralStyleFiles.content,
    neuralStyleFiles.style
  ]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ActionSection
      src={resultUrl || src}
      heading={heading}
      description={desctiption}
      uploadFile={uploadFile}
      setFile={setFile}
      setUrl={setImgUrl}
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
