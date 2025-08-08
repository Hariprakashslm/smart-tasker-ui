export const setDocumentTitle = (title: string) => {
  if (typeof window !== 'undefined') document.title = title;
};