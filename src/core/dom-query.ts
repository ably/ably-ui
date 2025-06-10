export const queryId = (val: string, root: ParentNode = document) =>
  root.querySelector(`[data-id="${CSS.escape(val)}"]`);

export const queryIdAll = (val: string, root: ParentNode = document) =>
  root.querySelectorAll(`[data-id="${CSS.escape(val)}"]`);
