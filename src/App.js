import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';


import Login from "./Login/login"
import MainPage from "./Main/main"


function App() {
  return (
    <>
    <Router>
  <Switch>
  <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    <Route path="/login" component={Login} />
    <Route path="/main" component={MainPage} />
  </Switch>
</Router>
    </>

  );
}

export default App;
