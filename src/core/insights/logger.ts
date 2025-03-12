// Inspired by Gatsby's logging

const styles = [
  `background: #ff5416`, // orange-600
  `border-radius: 0.5em`,
  `color: white`,
  `font-weight: bold`,
  `padding: 2px 0.5em`,
].join(";");

export const debug = (...args: unknown[]) => {
  console.debug(`%cinsights`, styles, ...args);
};

export const info = (...args: unknown[]) => {
  console.info(`%cinsights`, styles, ...args);
};

export const warn = (...args: unknown[]) => {
  console.warn(`%cinsights`, styles, ...args);
};

export const error = (...args: unknown[]) => {
  console.error(`%cinsights`, styles, ...args);
};
