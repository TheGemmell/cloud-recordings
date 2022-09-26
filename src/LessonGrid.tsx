import { Stack } from "@mantine/core";
import LessonCard from "./LessonCard";
import { Lesson, LessonWeeks } from "./lib"

export default function LessonGrid({data, filterWeek, filterDay}: {data: LessonWeeks, filterWeek: number, filterDay: number}) {
  const lessons = () => {
    const week: Lesson[] = data[filterWeek];
    const daysToShow = week.filter((lesson) => {
      if (lesson.day === filterDay) {
        return true;
      } else {
        return false;
      }
    })

    if (daysToShow.length > 0) {
      return (
        <>
          <h1>{daysToShow[0].date as string}</h1>
          {daysToShow.map((lesson) => <LessonCard data={lesson} /> )}
        </>
      )
    } else {
      return (
        <h2>There doesn't appear to be any recordings for that date</h2>
      )
    }

  }

  return (
    <>
      {lessons()}
    </>
  )
}
