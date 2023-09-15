import './App.scss';

import data from './data/data.json'
import { useState, useEffect } from 'react';

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Set the scores from the imported JSON data
    setScores(data);
  }, []);

  return (
    <div className="App">
      <div className='result-block'>
        <div className="your-result left">
          <h3>Your Result</h3>
          <div className="result-round">
            <div><h1>76</h1><p>of 100</p></div>
          </div>
          <h2>Great</h2>
          <div className='bottom-text'>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>

        <div className="summary right">
          <h1 >Summary</h1>

          {scores.map((scoreItem) => (
            <div className={`summary-block ${scoreItem.category.toLowerCase()}`} key={scoreItem.category}>
              <div className="svg-and-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path stroke={scoreItem.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d={scoreItem.icon} />
                </svg>
                <p id={scoreItem.category}>{scoreItem.category}</p>
              </div>
              <p className='mark'>{scoreItem.score}<p className='hundred'>/ 100</p></p>
            </div>
          ))}

          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
