import { Lesson } from "./lib";

export default function LessonCard({data}: {data: Lesson}) {
  const { title, link } = data;

  return (
    <div className="lesson">
      <a href={link}>
        {title}
      <p className="lesson-text">{link as string}</p>
    </a>
    </div>
  )
}
