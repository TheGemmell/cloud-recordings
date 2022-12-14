const startDate = new Date(2022, 8, 5);

const weekDays = [
  { day: "Monday", num: 1 },
  { day: "Tuesday", num: 2 },
  { day: "Wednesday", num: 3 },
  { day: "Thursday", num: 4 },
  { day: "Friday", num: 5 }
];

export interface LessonWeeks {
  [key: number]: Lesson[];
}

export interface Lesson {
  title: string;
  link: string;
  date: Date | string;
  day: number;
}

function convertDate(dateStr: string): Date {
  const date: string[] | Date = dateStr.split("/");
  [ date[0], date[1] ] = [ date[1], date[0] ];
  return new Date(date.join("/"));
}

function convertWeekNo(date: Date) {
  // @ts-ignore
  const numOfDays = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  const weekNo = Math.ceil((numOfDays) / 7);
  return weekNo;
}

function prepareLinks(rawLinks: string[][]): LessonWeeks {
  const weeks: LessonWeeks | any = {};

  for (let i = 0; i < rawLinks.length; i++) {
    const date = convertDate(rawLinks[i][0]);
    const weekNo = convertWeekNo(date);
    const weekData = {
      title: rawLinks[i][1],
      date: rawLinks[i][0],
      link: rawLinks[i][2],
      day: date.getDay()
    } as Lesson;

    if (weeks[weekNo]) {
      weeks[weekNo].push(weekData);
    } else {
      weeks[weekNo] = [weekData];
    }
  }

  console.log(weeks)
  return weeks
}

export { convertDate, weekDays, prepareLinks };
