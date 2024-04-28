export const formatDate = (deadline: Date | undefined): string => {
  if (!deadline) return "";
  const day = deadline.getDate().toString().padStart(2, "0");
  const month = (deadline.getMonth() + 1).toString().padStart(2, "0");
  const year = deadline.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export const formatDateToObject = (
  deadline: string | undefined
): Date | undefined => {
  if (deadline === "" || !deadline) return undefined;
  const [day, month, year] = deadline.split("/");
  const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
  return dateObject;
};
