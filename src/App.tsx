import { useState, useEffect } from 'react';
import './App.css';
import { AppShell } from '@mantine/core'
import { LessonWeeks, prepareLinks } from './lib';
import LessonNav from './LessonNav';
import LessonGrid from './LessonGrid';

type SheetResponse = {
  values: string[][];
  majorDimensions: "ROWS" | "COLOUMNS";
  range: string;
}

function App() {
  const [ lessons, setLessons ] = useState<LessonWeeks>();
  const [ activeWeek, setActiveWeek ] = useState(1);
  const [ activeDay, setActiveDay ] = useState(1);

  console.log(lessons)
  console.log(activeDay, activeWeek)

  useEffect(() => {
    async function getLinks(range: string) {
      let request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1ZfLVzYrXJcAARFfLzuYSEI1ylvT16CWeRwY4QFdf1fU/values/${range}?key=AIzaSyCJv-Xb0xp1n_qFvzf0dtqTp9dKtHdS7N4`)
      let data: SheetResponse = await request.json();
      setLessons(prepareLinks(data.values));
    }
    getLinks("A2:C800")
  },[])


  return (
    <>
      {lessons ?
      <AppShell
      navbar={<LessonNav activeDay={activeDay} activeWeek={activeWeek} setActiveWeek={setActiveWeek} setActiveDay={setActiveDay}/>}
      >
        <LessonGrid data={lessons} filterDay={activeDay} filterWeek={activeWeek} />
      </AppShell>
      :
      <h1>Loading...</h1>
      }
    </>
  );
}

export default App;
