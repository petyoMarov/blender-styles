import { useState, useEffect } from 'react';

import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';
import { handleUrlUpload, handleFileUpload } from '../services/deepai';

export default function ToonifyYourself() {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleUrlUpload(
      actionPagesContent.toonifyYourself.apiId,
      imgUrl,
      setResultUrl,
      setError,
      setLoading
    );
  }, [imgUrl]);

  useEffect(() => {
    handleFileUpload(
      actionPagesContent.toonifyYourself.apiId,
      file,
      setResultUrl,
      setError,
      setLoading
    );
  }, [file]);

  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.toonifyYourself.src}
        heading={actionPagesContent.toonifyYourself.title}
        desctiption={actionPagesContent.toonifyYourself.description}
        resultUrl={resultUrl}
        setFile={setFile}
        setUrl={setImgUrl}
        error={error}
        loading={loading}
      />
    </Layout>
  );
}
