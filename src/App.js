import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Git hub
        </p>
        <div style={{ backgroundColor:'blue', padding: 2, borderRadius: 10}}>
          <p>
            hello world deploy on github
          </p> 
 <p>
           welcome to vasave
          </p> 
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
