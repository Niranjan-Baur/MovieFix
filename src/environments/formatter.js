export const textFormatter = (text = '', len = 0, ellipsis = true) => {
  if (text?.length > len) {
    text = text?.substring(0, len);
    if (ellipsis) {
      text = text + '...';
    }
    return text;
  }
  return text;
};
