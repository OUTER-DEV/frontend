import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./Login/login"

function App() {
  return (
    <>
<Router>
  <Switch>

    <Route path="/login" component={Login} />
  </Switch>
</Router>
    <div className="App">
      <header className="App-header">
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
      </header>

    </div>
    </>
  );
}

export default App;
