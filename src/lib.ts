function convertDate(dateStr: string): Date {
  let date: string[] | Date = dateStr.split("/");
  [ date[0], date[1] ] = [ date[1], date[0] ];
  return new Date(date.join("/"));
}

export { convertDate }
