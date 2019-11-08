import React, { useEffect, useState } from 'react';
import TestCard from './components/test-card';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState();
  useEffect(() => {
    axios.get('/api/hello').then(
      ({ data }) => {
        console.log({ data });
        setCount(data.value);
      }
    );
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {count}
        </div>
        <TestCard />
      </header>
    </div>
  );
}

export default App;