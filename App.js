import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        /react 的logo,可以唔要/
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        /Learn React 中加入超連結,可以去到react的網頁,可以唔要/
      </header>
      <SignIn></SignIn>
      /mui 的temp/
    </div>
  );
}

export default App;
