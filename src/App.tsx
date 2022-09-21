import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ lessons, setLessons ] = useState();
  console.log(lessons)
  useEffect(() => {
    async function getLinks(range: string) {
      let data = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1ZfLVzYrXJcAARFfLzuYSEI1ylvT16CWeRwY4QFdf1fU/values/${range}?key=AIzaSyCJv-Xb0xp1n_qFvzf0dtqTp9dKtHdS7N4`)
      data = await data.json();
      console.log(data);
      setLessons(data.values)
    }
    getLinks("A2:C800")
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
