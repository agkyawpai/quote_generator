import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchData();
  })
  const fetchData = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        setQuote(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{quote}</h1>
        <button className="button" onClick={fetchData}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
