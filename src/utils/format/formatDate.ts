export const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(new Date(date));