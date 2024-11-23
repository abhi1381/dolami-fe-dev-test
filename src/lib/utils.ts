export function cn(...inputs: Array<string | undefined | Record<string, boolean> | Array<string | undefined | Record<string, boolean>>>): string {
  return inputs
    .flat()
    .filter(Boolean)
    .map((item) => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object') {
        return Object.entries(item)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}