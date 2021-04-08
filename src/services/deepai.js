import deepai from 'deepai';

deepai.setApiKey('9911f2e2-a816-401d-8cbb-0a8861cfefd1');

export const handleUrlUpload = async (
  apiId,
  imgUrl,
  setResultUrl,
  setError,
  setLoading
) => {
  if (!imgUrl) {
    setError(false);
    return;
  }
  setLoading(true);

  try {
    const resp = await deepai.callStandardApi(`${apiId}`, {
      image: imgUrl
    });
    setResultUrl(resp.output_url);
    setLoading(false);
    setError(false);
  } catch (err) {
    setLoading(false);
    setError('Error processing given inputs from request.');
    console.error(err);
  }
};

export const handleFileUpload = async (
  apiId,
  file,
  setResultUrl,
  setError,
  setLoading
) => {
  if (!file) {
    setError(false);
    return;
  }
  setLoading(true);

  try {
    const resp = await deepai.callStandardApi(`${apiId}`, {
      image: document.getElementById('contained-button-file')
    });
    setResultUrl(resp.output_url);
    setLoading(false);
    setError(false);
  } catch (err) {
    setLoading(false);
    setError('Error processing given inputs from request.');
    console.error(err);
  }
};

export const handleNeuralStyleUrlUpload = async (
  apiId,
  neuralStyleUrls,
  setResultUrl,
  setError,
  setLoading
) => {
  if (!neuralStyleUrls.content || !neuralStyleUrls.style) {
    setError(false);
    return;
  }
  setLoading(true);

  try {
    const resp = await deepai.callStandardApi(`${apiId}`, {
      content: neuralStyleUrls.content,
      style: neuralStyleUrls.style
    });
    setResultUrl(resp.output_url);
    setLoading(false);
    setError(false);
  } catch (err) {
    setLoading(false);
    setError('Error processing given inputs from request.');
    console.error(err);
  }
};

export const handleNeuralStyleFileUpload = async (
  apiId,
  neuralStyleFiles,
  setResultUrl,
  setError,
  setLoading
) => {
  if (!neuralStyleFiles.content || !neuralStyleFiles.style) {
    setError(false);
    return;
  }
  setLoading(true);

  try {
    const resp = await deepai.callStandardApi(`${apiId}`, {
      content: document.getElementById('contained-button-file-content'),
      style: document.getElementById('contained-button-file-style')
    });
    setResultUrl(resp.output_url);
    setLoading(false);
    setError(false);
  } catch (err) {
    setLoading(false);
    setError('Error processing given inputs from request.');
    console.error(err);
  }
};
