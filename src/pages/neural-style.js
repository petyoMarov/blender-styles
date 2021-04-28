import { useState, useEffect } from 'react';

import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';
import {
  handleNeuralStyleUrlUpload,
  handleNeuralStyleFileUpload
} from '../services/deepai';

export default function NeuralStyle() {
  const [neuralStyleFiles, setNeuralStyleFiles] = useState({
    content: null,
    style: null
  });
  const [neuralStyleUrls, setNeuralStyleUrls] = useState({
    content: null,
    style: null
  });
  const [resultUrl, setResultUrl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleNeuralStyleUrlUpload(
      actionPagesContent.neuralStyle.apiId,
      neuralStyleUrls,
      setResultUrl,
      setError,
      setLoading
    );
  }, [neuralStyleUrls]);

  useEffect(() => {
    handleNeuralStyleFileUpload(
      actionPagesContent.neuralStyle.apiId,
      neuralStyleFiles,
      setResultUrl,
      setError,
      setLoading
    );
  }, [neuralStyleFiles]);

  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.neuralStyle.src}
        heading={actionPagesContent.neuralStyle.title}
        desctiption={actionPagesContent.neuralStyle.description}
        resultUrl={resultUrl}
        neuralStyleUrls={neuralStyleUrls}
        setNeuralStyleUrls={setNeuralStyleUrls}
        neuralStyleFiles={neuralStyleFiles}
        setNeuralStyleFiles={setNeuralStyleFiles}
        error={error}
        loading={loading}
      />
    </Layout>
  );
}
