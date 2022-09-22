import { useState, useEffect } from 'react';
import './App.css';
import LessonBrowser from './LessonBrowser';

type SheetResponse = {
  values: string[][];
  majorDimensions: "ROWS" | "COLOUMNS";
  range: string;
}

function App() {
  const [ lessons, setLessons ] = useState<string[][]>();
  console.log(lessons)
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
      { lessons ?
        <LessonBrowser data={lessons} />
      :
        <div className="App">
          <h1>Loading...</h1>
        </div>
      }
    </>
  );
}

export default App;
