export const queryId = (val, append = "") =>
  document.querySelector(`[data-id=${val}]${append}`);

export const queryIdAll = (val, append = "") =>
  document.querySelectorAll(`[data-id=${val}]${append}`);
