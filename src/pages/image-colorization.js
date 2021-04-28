import { useState, useEffect } from 'react';

import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';
import { handleUrlUpload, handleFileUpload } from '../services/deepai';

export default function ImageColorization() {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleUrlUpload(
      actionPagesContent.imageColorizer.apiId,
      imgUrl,
      setResultUrl,
      setError,
      setLoading
    );
  }, [imgUrl]);

  useEffect(() => {
    handleFileUpload(
      actionPagesContent.imageColorizer.apiId,
      file,
      setResultUrl,
      setError,
      setLoading
    );
  }, [file]);

  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.imageColorizer.src}
        heading={actionPagesContent.imageColorizer.title}
        desctiption={actionPagesContent.imageColorizer.description}
        resultUrl={resultUrl}
        setFile={setFile}
        setUrl={setImgUrl}
        error={error}
        loading={loading}
      />
    </Layout>
  );
}
