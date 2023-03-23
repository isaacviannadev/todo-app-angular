export const formatDate = (date: Date) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const suffix = getSuffix(day);

  return `${month} ${day}${suffix}, ${year}`;
};

const getSuffix = (day: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = day % 100;
  return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
};
