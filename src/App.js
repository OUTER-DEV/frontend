import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Login from "./Login/login"
import MainPage from "./Main/main"


function App() {
  return (
    <>
    <Router>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/main" component={MainPage} />
  </Switch>
</Router>
    </>

  );
}

export default App;
