export const remsToPixelValue = (prop) =>
  parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(prop),
    10
  ) * parseInt(getComputedStyle(document.documentElement).fontSize, 10);
