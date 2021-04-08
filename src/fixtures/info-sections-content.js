import imageColorizerSrc from '../assets/images/img-colorization.svg';
import neuralStyleSrc from '../assets/images/neural-style.svg';
import toonifyYourselfSrc from '../assets/images/toonify-yourself.svg';
import superResolutionSrc from '../assets/images/super-resolution.svg';

const infoSectionsContent = [
  {
    path: '/image-colorizer',
    title: 'Image Colorization',
    subtitle:
      'Colorize black and white images using the image colorization API. Add color to old family photos and historic images and bring them back to life with colorization.',
    imgStart: true,
    src: imageColorizerSrc,
    alt: 'Image Colorization',
    darkText: false,
    primaryBtn: true,
    darkBg: true
  },
  {
    path: '/neural-style',
    title: 'Neural Style',
    subtitle:
      'Turn any photo into an artwork! We use an algorithm inspired by the human brain. It uses the stylistic elements of one image to draw the content of another. Get your own artwork in just three steps.',
    imgStart: false,
    src: neuralStyleSrc,
    alt: 'Neural Style',
    darkText: true,
    primaryBtn: false,
    darkBg: false
  },
  {
    path: '/toonify-yourself',
    title: 'Toonify Yourself',
    subtitle: `Toonify is a set of AI powered tools for face transformation. Upload a photo and see what you'd look like in an animated movie. Our neural networks will reimagine your face, see what they come up with!`,
    imgStart: true,
    src: toonifyYourselfSrc,
    alt: 'Neural Style',
    darkText: false,
    primaryBtn: true,
    darkBg: true
  },
  {
    path: '/super-resolution',
    title: 'Super Resolution',
    subtitle:
      'The main challenge behind super-resolution is being able to turn low quality pictures into high definition images. This increase in quality involves not only the pixel count, but also some extra details such as texture quality and anti-aliasing among other things. Several techniques and approaches are used to achieve the results and the main challenge today is to make it as accessible and optimized as possible.',
    imgStart: false,
    src: superResolutionSrc,
    alt: 'Neural Style',
    darkText: true,
    primaryBtn: false,
    darkBg: false
  }
];

export default infoSectionsContent;
