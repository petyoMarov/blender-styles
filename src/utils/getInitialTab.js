const getInitialTab = (location) => {
  if (location.pathname.includes('image-colorizer')) {
    return 0;
  }

  if (location.pathname.includes('neural-style')) {
    return 1;
  }

  if (location.pathname.includes('super-resolution')) {
    return 2;
  }

  if (location.pathname.includes('toonify-yourself')) {
    return 3;
  }

  return false;
};

export default getInitialTab;
