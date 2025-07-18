/**
 * Utility function to combine CSS class names with conditional logic
 * @param classes - Array of class names or objects with conditional classes
 * @returns Combined class string
 */
export function classNames(...classes: (string | undefined | null | false | Record<string, boolean>)[]): string {
  return classes
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, condition]) => condition)
          .map(([className]) => className)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}

/**
 * Alternative name for classNames function
 */
export const cn = classNames; 