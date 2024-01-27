import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';


import Login from "./Login/login"
import Home from './Home/Home';
import DepotForm from './Income/Income';

function App() {
  return (
    <>
    <Router>
  <Switch>
  <Route exact path="/">
        <Redirect to="/login" />
  </Route>
  <Route path="/login" component={Login} />
  <Route path="/home" component={Home} />
  <Route path="/income" component={DepotForm} />
  </Switch>
</Router>
    </>

  );
}

export default App;
