const startDate = new Date(2022, 8, 5);

interface LessonWeeks {
  1?: string[][];
  2?: string[][];
  3?: string[][];
  4?: string[][];
  5?: string[][];
  6?: string[][];
  7?: string[][];
  8?: string[][];
  9?: string[][];
  10?: string[][];
  11?: string[][];
  12?: string[][];
  13?: string[][];
  14?: string[][];
  15?: string[][];
  16?: string[][];
}
interface Lesson {
  title: string;
  link: string;
  date: Date | string;
}

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

function prepareLinks(rawLinks: string[][]) {
  const weeks: LessonWeeks | any = {};

  for (let i = 0; i < rawLinks.length; i++) {
    const date = convertDate(rawLinks[i][0]);
    const weekNo = convertWeekNo(date);
    const weekData = {
      title: rawLinks[i][1],
      date: rawLinks[i][0],
      link: rawLinks[i][2]
    }
    if (weeks[weekNo]) {
      weeks[weekNo].push(weekData)
    } else {
      weeks[weekNo] = [weekData]
    }
  }

  console.log(weeks)
}

export { convertDate };

let testData = [
  [
    "7/9/22",
    "Intro To Zoom",
    "https://google.com"
  ],
  [
    "8/9/22",
    "Intro to Slack",
    "yoyoyoy"
  ],
]

prepareLinks(testData);
