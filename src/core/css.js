export const remsToPixelValue = (remString) =>
  parseFloat(remString) *
  parseFloat(getComputedStyle(document.documentElement).fontSize);
