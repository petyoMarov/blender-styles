import { useState, useEffect } from 'react';

import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';
import { handleUrlUpload, handleFileUpload } from '../services/deepai';

export default function SuperResolution() {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleUrlUpload(
      actionPagesContent.superResolution.apiId,
      imgUrl,
      setResultUrl,
      setError,
      setLoading
    );
  }, [imgUrl]);

  useEffect(() => {
    handleFileUpload(
      actionPagesContent.superResolution.apiId,
      file,
      setResultUrl,
      setError,
      setLoading
    );
  }, [file]);

  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.superResolution.src}
        heading={actionPagesContent.superResolution.title}
        desctiption={actionPagesContent.superResolution.description}
        resultUrl={resultUrl}
        setFile={setFile}
        setUrl={setImgUrl}
        error={error}
        loading={loading}
      />
    </Layout>
  );
}
