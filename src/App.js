import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';


import Login from "./Login/login"
import Header from './Header/Header';

function App() {
  return (
    <>
    <Router>
  <Switch>
  <Route exact path="/">
        <Redirect to="/login" />
  </Route>
  <Route path="/login" component={Login} />
  <Route path="/header" component={Header} />
  </Switch>
</Router>
    </>

  );
}

export default App;
