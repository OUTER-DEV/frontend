import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';


import Login from "./Login/login"
import Register from './Login/register';
import MainPage from "./Main/main"
import Dashboard from "./Dashboard/dashboard"


import Home from './Home/Home';


function App() {
  return (
    <>
    <Router>
  <Switch>
  <Route exact path="/">
        <Redirect to="/login" />

    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/main" component={MainPage} />
    <Route path="/dashboard" component={Dashboard} />

  </Route>
  <Route path="/login" component={Login} />
  <Route path="/home" component={Home} />

  </Switch>
</Router>
    </>

  );
}

export default App;
