export const convertTailwindClassToVar = (className: string) =>
  className.replace(/(text|bg|from|to)-([a-z0-9-]+)/gi, "var(--color-$2)");
