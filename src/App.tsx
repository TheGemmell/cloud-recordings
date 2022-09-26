import { useState, useEffect } from 'react';
import './App.css';
import { AppShell, Header, Navbar } from '@mantine/core'
import LessonNav from './LessonNav';

type SheetResponse = {
  values: string[][];
  majorDimensions: "ROWS" | "COLOUMNS";
  range: string;
}

function App() {
  const [ lessons, setLessons ] = useState<string[][]>();
  const [activeWeek, setActiveWeek] = useState('Releases');
  const [activeDay, setActiveDay] = useState('Settings');

  console.log(lessons)
  console.log(activeDay, activeWeek)
  useEffect(() => {
    async function getLinks(range: string) {
      let request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1ZfLVzYrXJcAARFfLzuYSEI1ylvT16CWeRwY4QFdf1fU/values/${range}?key=AIzaSyCJv-Xb0xp1n_qFvzf0dtqTp9dKtHdS7N4`)
      let data: SheetResponse = await request.json();
      setLessons(data.values);
    }
    getLinks("A2:C800")
  },[])

  return (
    <>
      {lessons ?
      <AppShell
      navbar={<LessonNav activeDay={activeDay} activeWeek={activeWeek} setActiveWeek={setActiveWeek} setActiveDay={setActiveDay}/>}
      >
        Hello
      </AppShell>
      :
      <h1>Loading...</h1>
      }
    </>
  );
}

export default App;
