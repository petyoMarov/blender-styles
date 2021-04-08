import imageColorizerSrc from '../assets/images/image-colorizer/example.jpeg';
import neuralStyleSrc from '../assets/images/neural-style/example.jpg';
import toonifyYourselfSrc from '../assets/images/toonify-yourself/example.jpeg';
import superResolutionSrc from '../assets/images/super-resolution/example.jpg';

const actionPagesContent = {
  imageColorizer: {
    apiId: 'colorizer',
    title: 'Image Colorization',
    description:
      'Use this deep learning model that has been trained to add color to grayscale images with amazing quality. Add a splash of life back to old family photos or historic images in a fraction of a second with this image colorization API.',
    src: imageColorizerSrc
  },
  neuralStyle: {
    apiId: 'fast-style-transfer',
    title: 'Neural Style',
    description:
      'Style transfer is a computer vision technique that allows us to recompose the content of an image in the style of another. It takes two images (a content image and a style reference image) and blends them together so that the resulting output image retains the core elements of the content image, but appears to be “painted” in the style of the style reference image.',
    src: neuralStyleSrc
  },
  toonifyYourself: {
    apiId: 'toonify',
    title: 'Toonify Yourself',
    description:
      'Turn a photo of any face into a cartoon instantly with artificial intelligence. Toonify uses a convolutional neural network to quickly transform the photo into a cartoon. The model is trained using deep learning to transform an image of a real face into cartoon character from a CG movie.',
    src: toonifyYourselfSrc
  },
  superResolution: {
    apiId: 'torch-srgan',
    title: 'Super Resolution',
    description:
      'The Super Resolution API uses machine learning to clarify, sharpen, and upscale the photo without losing its content and defining characteristics. Blurry images are unfortunately common and are a problem for professionals and hobbyists alike. Super resolution uses machine learning techniques to upscale images in a fraction of a second.',
    src: superResolutionSrc
  }
};

export default actionPagesContent;
