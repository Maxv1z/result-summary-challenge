import './App.scss';

function App() {
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
          <h1>Summary</h1>

          <div className="summary-block">
            Reaction 80 / 100
          </div>

          <div className="summary-block">
            Memory
            92 / 100
          </div>

          <div className="summary-block">
            Verbal
            61 / 100
          </div>

          <div className="summary-block">
            Visual
            72 / 100
          </div>


          <button>Continue</button>
        </div>
      </div>
    </div >
  );
}

export default App;
