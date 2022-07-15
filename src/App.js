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
        <div style={{ backgroundColor:'#000', padding:12, borderRadius: 10, marginBottom: 14 }}>
          <p style={{ fontSize: 20}}>
            hello world deploy on github
          </p> 
          <p style={{ fontSize: 20}}>
           welcome to vasave testing live deploy
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
