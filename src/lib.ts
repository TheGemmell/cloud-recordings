const startDate = new Date(2022, 8, 5);

function convertDate(dateStr: string): Date {
  const date: string[] | Date = dateStr.split("/");
  [ date[0], date[1] ] = [ date[1], date[0] ];
  return new Date(date.join("/"));
}

function convertWeekNo(date: Date) {
  const numOfDays = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  const weekNo = Math.ceil((numOfDays) / 7);
  return weekNo;
}

export { convertDate };



