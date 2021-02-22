export const queryId = (val, root = document) =>
  root.querySelector(`[data-id=${val}]`);

export const queryIdAll = (val, root = document) =>
  root.querySelectorAll(`[data-id=${val}]`);
